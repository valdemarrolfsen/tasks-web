/**
 * Created by valdemarrolfsen on 24.01.2017.
 */

import axios from 'axios';

class Api {
  static headers() {
    return {
      'Accept':'application/json',
      'Content-Type':'application/json',
      'Authorization':localStorage.getItem('token')
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET')
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {

    // 10.22.18.195
    const url = `http://localhost:8080${route}`;

    let options = Object.assign({method:verb}, params ? {data: JSON.stringify(params)} : null);
    options.headers = Api.headers();

    return axios(url, options)
      .then( resp => {
        return resp;
    }).catch(err => {throw err});
  }
}

export default Api