const upload = require('../utils/upload');
const fetch = require('node-fetch');
const time = Date(Date.now());
const currentTime = time.toString();

module.exports = async (job) => {
  const response = await fetch(`https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/Air_Quality_PM25_Latest_Results/FeatureServer/0/query?where=1%3D1+AND+lastUpdated+%3E+timestamp+${currentTime}+AND+sourceName+%3D+%27AirNow%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=value&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token=`);
  const html = await response.text();
  
  return {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.61444,
        32.690277
      ]
    },
    "properties": {
      "value": 27
    }
  }
}
console.log(response);