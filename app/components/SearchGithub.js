'use strict';
import React from 'react';
import Router from 'react-router';

export default React.createClass({
  mixins: [Router.Navigation],

  handleSubmit() {
    var username = this.refs.username.getDOMNode().value;
    this.refs.username.getDOMNode().value = '';
    this.transitionTo('profile', {username: username});
  },

  render() {
    return (
      // jshint ignore:start
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref="username" />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
      // jshint ignore:end
    );
  }
});
