'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');

var router = express.Router();
router
  .get('/', passport.authenticate('google', {
    successRedirect: '/home',
    failureRedirect: '/main',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ],
    session: false
  }))

  .get('/callback', passport.authenticate('google', {
    failureRedirect: '/main',
    session: false
  }), auth.setTokenCookie);

module.exports = router;
