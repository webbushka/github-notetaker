'use strict';
import appConstants from '../constants/appConstants';
import axios from 'axios';

let id = 'YOUR_CLIENT_ID_HERE';
let sec = 'YOUR_SECRET_ID_HERE';
let param = `?client_id=${id}&client_secret=${sec}`;

export default {
  getBio(username) {
    let url = `https://api.github.com/users/${username}${param}`;
    return axios.get(url);
  },

  getRepos(username) {
    let url = `https://api.github.com/users/${username}/repos` + param;
    return axios.get(url);
  }
};
