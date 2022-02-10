var express = require('express');
var router = express.Router();
const axios = require('axios');
const { request } = require('../app');

/* GET home page. */
router.get('/', async function(req, res, next) {
  console.log('===================')
  // secret is secret key in reCaptcha project
  const body = {
    secret: "6LdYX2EeAAAAACgZwUG1LBo6DmHFblME9HChiR9C",
    response:"03AGdBq2781sUGAcSnQ2Ww_BtcVrOejuI-DRZ1XzGh1v8baMYK3r_WU7RFno785TtvuX6EDrd78ad8TcAa4Dok7WV3qEDBRa9jzBuq5py9hwhyqMpWZSdliW3Q-S9VGPMxDxDwmjgV0bcUWTLlEakwUL0TgcyfAwRrt-mXNq-K9y98G1zQB_byA32pSmN2lBjufo1p0ClWpXi4jnMimL_jrfLAXdNmGxQKxfeOn_gsry-YleqPTePCJfA7HXHQNN83vtYW1n4m4iYp-IkoqmhBiE0LhRl5BK40TIBCIJ-8I_HKL3tftRs78GYyerdpCsY0TOLGuIo9HmLb8w5yXlKitTbf4AAaumV5ubNq4sdpZ8fRKSVpJWsNw9IO7p8GQhxY3UJRV3EwdLWv8mEfQZIvgYJa-dHHG60TIhx4R_9rEAKmXQJle7hakb62wfPT1KxqaF3_7rDgMJth"
  }
  //accept only application/x-www-form-urlencoded
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
 //secret and response token should be in url as query
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${body.secret}&response=${body.response}`;
  const requestVerify = await axios.post(url, {}, config)
  res.json({success: requestVerify.data});
});

module.exports = router;
