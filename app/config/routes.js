'use strict';
import React from 'react';
import Router from 'react-router';
let { DefaultRoute, Route } = Router;

import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';

module.exports = (
  // jshint ignore:start
  <Route name="app" path="/" handler={Main}>
    <Route name="profile" path="profile/:username" handler={Profile} />
    <DefaultRoute handler={Home} />
  </Route>
  // jshint ignore:end
);
