const gulp = require('gulp');
const fs = require('fs');
const maker = require('echarts-mapmaker/src/maker');
const path = require('path');
const pinyin = require('pinyin');
const constants = require('../constants');
const FILES = 'src/**/*.geojson';
const pug = require('pug');
const crypto = require('crypto');

const DUPLICATED = [
'市中区',
'城区',
'郊区',
'城区',
'矿区',
'郊区',
'城区',
'鼓楼区',
'桥西区',
'桥东区',
'桥西区',
'新华区',
'鼓楼区',
'新华区',
'西湖区',
'龙华区',
'青山区',
'鼓楼区',
'永定区',
'城关区',
'白云区',
'铁西区',
'海州区',
'铁东区',
'铁西区',
'新城区',
'长安区',
'城中区',
'郊区',
'西安区',
'南山区',
'向阳区',
]


// List all files in a directory in Node.js recursively in a synchronous fashion
var walkSync = function(dir, filelist) {
  files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      filelist.push(path.join(dir, file));
    }
  });
  return filelist;
};

gulp.task("counties", function(){
  const filelist = walkSync('./src');
  const pinyinMap = {};
  const fileMap = {}

  const provinces = {};
  for(afile of filelist){
    if(afile.endsWith('.geojson')){
      var dest = afile.replace('src/', '')
          .replace('.geojson', '')
          .split('/');
      var province = dest[0];
      var cityName = dest[1];
      var countyName = dest[2];
      var fileName = dest.join('_')
          .replace('市', '')
          .replace('区', '')
          .replace('县', '');
      fileName = getPinyin(fileName);
      physicalFileName = getHash(fileName);
      var targetJs = path.join(constants.dist, `${physicalFileName}.js`);

      if(DUPLICATED.indexOf(countyName)!==-1){
        countyName = cityName + countyName;
      }
      if(province in provinces){
        if (cityName in provinces[province]){
          provinces[province][cityName].push(countyName);
        }else{
          provinces[province][cityName] = [countyName];
        }
      }else{
        provinces[province] = {}
        provinces[province][cityName] =  [countyName];
      }
      pinyinMap[countyName] = fileName;
      fileMap[fileName] = physicalFileName;
      maker.makeJs(afile, targetJs, countyName);
    }
  }
  var registry = JSON.parse(fs.readFileSync('registry.json'))
  registry.PINYIN_MAP = pinyinMap;
  registry.FILE_MAP = fileMap;
  fs.writeFileSync('registry.json', JSON.stringify(registry, 'utf-8', 4));
  fs.writeFileSync('profile.json', JSON.stringify(provinces, 'utf-8', 4));
});

gulp.task("all", () =>{
  var preview = pug.compileFile(path.join("templates", "preview.pug"));
  var registry = JSON.parse(fs.readFileSync('registry.json'));
  fs.writeFileSync(path.join('pages', 'preview.html'), preview(registry));
});

gulp.task("provinces", () => {
  var profile = JSON.parse(fs.readFileSync('profile.json'));
  var registry = JSON.parse(fs.readFileSync('registry.json'));  
  for(province of Object.keys(profile)){
    const province_pinyin = getPinyin(province);
    const sub_pinyin_map = {};
    const sub_file_map = {};
    for(city of Object.keys(profile[province])){
      sub_pinyin_map[city] = {}
      for(county in profile[province][city]){
        const countyName = profile[province][city][county];
        const fileName = registry.PINYIN_MAP[countyName];
        sub_pinyin_map[city][countyName] = fileName;
        sub_file_map[fileName] = registry.FILE_MAP[fileName];
      }
    }
    var preview = pug.compileFile(path.join("templates", "preview-city.pug"));
    fs.writeFileSync(path.join('pages', `${province_pinyin}.html`),
                     preview({JS_FOLDER: registry.JS_FOLDER,
                              pinyin_map: sub_pinyin_map, FILE_MAP: sub_file_map}));
  }
});

gulp.task("index", () => {
  var index = pug.compileFile(path.join("templates", "map.pug"));
  var profile = JSON.parse(fs.readFileSync('profile.json'));
  var provinces = {};
  for(province of Object.keys(profile)){
    provinces[province] = getPinyin(province);
  }
  provinces['天津'] = 'zhi2xia2shi4';
  provinces['北京'] = 'zhi2xia2shi4';
  provinces['上海'] = 'zhi2xia2shi4';
  provinces['重庆'] = 'zhi2xia2shi4';
  provinces['香港'] = 'zhi2xia2shi4';
  provinces['澳门'] = 'zhi2xia2shi4';
  fs.writeFileSync(path.join('pages', 'index.html'), index({provinces:provinces}));
});


function getPinyin(Chinese_words){
    const py = pinyin(Chinese_words, {
	    style: pinyin.STYLE_TONE2
	});
    return py.join('');
}


function getHash(longPinYin){
  const hash = crypto.createHash('md5').update(longPinYin).digest('hex');
  console.log(hash);
  return hash;
}
