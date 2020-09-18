const fetch = require('node-fetch');
const upload = require('../utils/upload');
const { JSDOM } = require('jsdom');
const { airQualityQueue } = require('./queue');

module.exports = async(job) => {
  try {
    const date = new Date();
    date.setHours(date.getHours() - 1);
    
  
    const airQualityData = await fetch(`https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/Air_Quality_PM25_Latest_Results/FeatureServer/0/query?where=1%3D1+AND+lastUpdated+%3E+timestamp+%27${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDay()}+${date.getUTCHours()}%3A00%3A00%27+AND+sourceName+%3D+%27AirNow%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=value&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token=`);
    
    const json = await airQualityData.json();
  
    const mapped = json.features.map(feature => ({
  
      lon: feature.geometry.coordinates[0],
      lat: feature.geometry.coordinates[1],
      value: feature.properties.value
         
       
  
    }));
    
    console.log('mapped', mapped);
    
    return mapped;
    
  } catch(error) {
    console.log(error);
    
  }
 

};
