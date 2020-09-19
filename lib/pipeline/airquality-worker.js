const fetch = require('node-fetch');
const upload = require('../utils/upload');
const { JSDOM } = require('jsdom');
const { airQualityQueue } = require('./queue');
const app = require('../app');
const express = require('express');
const { checkAPoint } = require('../utils/conversion');
const Notification = require('../model/notification');

module.exports = async (job) => {
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

  } catch (error) {
    console.log(error);
  }

  const searchedUser = await Notification.find();
  // const searchedUser = await fetch('http://localhost:7890/api/v1/notifications');
  // const json = await searchedUser.json();
  console.log(searchedUser, 'hello');
  for (let i = 0; i < searchedUser.length; i++) {
    console.log('check');
    for (let j = 0; j < mapped.length; j++) {
      console.log('mate');
      
      checkAPoint(mapped[j].lon, mapped[j].lat, searchedUser[i].lon, searchedUser[i].lat, searchedUser[i].range);
      if (checkAPoint === true) {
        console.log('notify!');
      }else{
        console.log('false');
      }
    }
  }
};

