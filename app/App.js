'use strict';
import React from 'react';
import Router from 'react-router';
import routes from './config/routes';

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(
    // jshint ignore:start
    <Handler/>,
    // jshint ignore:end
    document.getElementById('app'));
});
