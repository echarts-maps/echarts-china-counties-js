const gulp = require('gulp');
const fs = require('fs');
const maker = require('echarts-mapmaker/src/maker');


function split_a_city(province, city){
  console.log(`processing ${province} - ${city}`);
  if(!fs.existsSync(`./node_modules/echarts-china-cities-js/src/${province}/${city}.js`)){
    city = city + '市';
  }
  if (!fs.existsSync(`./src/${province}`)){
    fs.mkdirSync(`./src/${province}`);
  }
  if (!fs.existsSync(`./src/${province}/${city}`)){
    fs.mkdirSync(`./src/${province}/${city}`);
  }
  maker.decompress(`./node_modules/echarts-china-cities-js/src/${province}/${city}.js`, 'x.geojson');
  maker.splitAsGeojson('x.geojson', `./src/${province}/${city}/`);
}

gulp.task('split_geojson', function(){
  const data = fs.readFileSync('./structure.json');
  const structure = JSON.parse(data);
  for(var province of Object.keys(structure)){
    for(var city of structure[province]){
      split_a_city(province, city);
    }
  }
});

const names = {
  'beijing': "北京",
  'tianjin': "天津",
  'shanghai': "上海",
  'chongqing': "重庆",
  'xianggang': "香港",
  'aomen': "澳门"
}

function split_a_district_city(province, city){
  var cityName = names[city]
  console.log(`processing ${province} - ${cityName}`);
  if (!fs.existsSync(`./src/${province}`)){
    fs.mkdirSync(`./src/${province}`);
  }
  if (!fs.existsSync(`./src/${province}/${cityName}`)){
    fs.mkdirSync(`./src/${province}/${cityName}`);
  }
  maker.decompress(`./node_modules/echarts/map/json/province/${city}.json`, 'x.geojson');
  maker.splitAsGeojson('x.geojson', `./src/${province}/${cityName}/`);
}

gulp.task('split_top_six', function(){
  const top_six = ['beijing', 'tianjin', 'shanghai', 'chongqing', 'xianggang', 'aomen'];
  for(var city of top_six){
    split_a_district_city('直辖市', city);
  }
});
