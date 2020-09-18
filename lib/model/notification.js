const app = require('../app');
const pool = require('../utils/pool');

class Notification {
    id;
    phone;
    lon;
    lat;
    range;
    threshold;

    constructor(row) {

      this.id = row.id;
      this.phone = row.phone;
      this.lon = row.lon;
      this.lat = row.lat;
      this.range = row.range;
      this.threshold = row.threshold;

    }

    static async insert(notification) {
      const { rows } = await pool.query(
        `INSERT INTO notifications (phone, lon, lat, range, threshold)
             VALUES ($1, $2, $3, $4, $5)
              RETURNING *
    `, [notification.phone, notification.lon, notification.lat, notification.range, notification.threshold]);
       
      return new Notification(rows[0]);

    }
    
    static async find() {
      const { rows } = await pool.query(
        'SELECT * FROM notifications'
      );

      return rows.map(row => new Notification(row));
    }



}



module.exports = Notification;
