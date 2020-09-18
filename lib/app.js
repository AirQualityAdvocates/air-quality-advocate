const express = require('express');
const app = express();


app.use(express.json());

const Notification = require('./model/notification');

app.post('/api/v1/notifications', async (req, res, next) => {
  try {
    const createNotification = await Notification.insert(req.body);
    res.send(createNotification);


  } catch (error) {
    next(error);

  }


});

app.get('/api/v1/notifications', async (req, res, next) => {
  try {
    const foundUser = await Notification.find();
    res.send(foundUser);

  } catch (error) {
    next(error);

  }

});



app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
