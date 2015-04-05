'use strict';
import Firebase from 'firebase';
import appConstants from '../constants/appConstants';

export default {
  homeInstance() {
    return new Firebase(appConstants.FIREBASE_HOST);
  },

  addNote(noteObj) {
    this.homeInstance().child(noteObj.user).push(noteObj.note);
  },

  toArray(obj) {
    var arr = [];
    for(var key in obj){
      arr.push(obj[key]);
    }
    return arr;
  }
};
