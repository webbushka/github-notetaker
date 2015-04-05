'use strict';
import React from 'react';

export default React.createClass({
  render: function(){
    let notes = this.props.notes.map(function(note, index){
      // jshint ignore:start
      return <li className="list-group-item" key={index}> {note} </li>
      // jshint ignore:end
    });

    return (
      // jshint ignore:start
      <ul className="list-group">{notes}</ul>
      // jshint ignore:end
    );
  }
});
