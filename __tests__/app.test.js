const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const Notification = require('../lib/model/notification');

describe('air-quality-advocate routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });
  it('has a POST that inserts lat/lon, phone number, range and air quality into a notifications table', async() => {
    const response = await request(app)
      .post('/api/v1/notifications')
      .send({
        phone: '503-555-1212',
        lon: -122,
        lat: 45,
       
        range: '20 miles',
        threshold: 35


      });
      

    expect(response.body).toEqual({

      id: expect.any(String),
      phone: '503-555-1212',
      lon: -122,
      lat: 45,
      range: '20 miles',
      threshold: 35

    });


  });
  it('has a GET that gets user information from the notification table',
    async() => {

      const searchedUser = await Notification.insert({
        phone: '503-555-1212',
        lon: -122,
        lat: 45,
       
        range: '20 miles',
        threshold: 35

      });
      
      const response = await request(app)
        .get('/api/v1/notifications');
      


      
  

      expect(response.body).toEqual([{

        id: expect.any(String),
        phone: '503-555-1212',
        lon: -122,
        lat: 45,
        range: '20 miles',
        threshold: 35

      }]);
      


    });


});
