'use strict';

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const env = require('dotenv').config().parsed;
var cron = require('node-cron');

const port = env.PORT || 3000;
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send("ok");
});

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});

cron.schedule('26 13 * * *', () => {
  console.log('running a task every sec');
}, {
  scheduled: true,
  timezone: "Asia/Kolkata"
});