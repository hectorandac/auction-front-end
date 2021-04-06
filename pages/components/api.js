import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

export default class Api {

  static axiosInstance;

  constructor() {
    Api.axiosInstance = this.loadAxios();
    Api.cookies = new Cookies();
  }

  static signIn(email, password, onSuccess, onFailure, onStart, onFinish) {
    onStart();
    var data = {
      email: email,
      password: password
    }
    Api.axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/sign_in`, data).then(function (response) {
      onSuccess(response);
      Api.cookies.set('access-token', response.headers['access-token'], { path: '/' });
      Api.cookies.set('client', response.headers['client'], { path: '/' });
      Api.cookies.set('uid', response.headers['uid'], { path: '/' });
      Api.cookies.set('role', response.data.data.roles_list[0], { path: '/' });
    }).catch(function (error) {
      console.log(error)
      onFailure(error.response.data.errors);
    });
    onFinish();
  }

  static userLoggedIn() {
    return Api.cookies.get('access-token') != undefined && Api.cookies.get('client') != undefined && Api.cookies.get('uid') != undefined && Api.cookies.get('role') != undefined
  }

  loadAxios() {
    const axiosInstance = axios.create();
  
    axiosInstance.interceptors.request.use(
      config => {
        config.headers = {
          'access-token': Api.cookies.get('token') == undefined ? '' : Api.cookies.get('token'),
          'client': Api.cookies.get('client') == undefined ? '' : Api.cookies.get('client'),
          'uid': Api.cookies.get('uid') == undefined ? '' : Api.cookies.get('uid')
        };
  
        return config;
      },
      error => Promise.reject(error)
    );
  
    return axiosInstance;
  }
}