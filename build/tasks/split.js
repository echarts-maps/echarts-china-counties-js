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
