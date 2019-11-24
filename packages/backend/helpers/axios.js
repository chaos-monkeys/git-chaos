const axiosLibrary = require('axios');
const _ = require('lodash');

const successHandler = (response, provider) => {
  const { status, data: body } = response;
  const url = _.get(response, 'config.url');
  const method = _.get(response, 'config.method');
  const headers = _.get(response, 'config.headers');
  const args = _.get(response, 'config.data');

  // console.log(url, {
  //   args, body, method, headers, url, status, provider,
  // });
  return response;
};

const errorHandler = (error, provider) => {
  const { stack, message } = error;
  const status = _.get(error, 'response.status');
  const statusText = _.get(error, 'response.statusText');
  const body = _.get(error, 'response.data');
  const args = _.get(error, 'response.config.data');
  const url = _.get(error, 'response.config.url') || _.get(error, 'config.url');
  const method = _.get(error, 'response.config.method');
  const headers = _.get(error, 'response.config.headers');

  // console.log(url, {
  //   method,
  //   body,
  //   args,
  //   headers,
  //   message,
  //   stack,
  //   url,
  //   status,
  //   statusText,
  //   provider,
  // });
  return Promise.reject(error);
};

const createAxiosInstance = (options, provider) => {
  const axios = axiosLibrary.create(options);

  axios.interceptors.request.use((request) => {
    request.startTime = process.hrtime();
    return request;
  });

  axios.interceptors.response.use((response) => {
    const elapsedHrTime = process.hrtime(response.config.startTime);
    response.elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    return response;
  });

  axios.interceptors.response.use(
    (response) => successHandler(response, provider),
    (error) => errorHandler(error, provider),
  );

  return axios;
};

const github = {
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: 'token 6c3e06f53e984fa18b1485fa83badb8be6b9d771',
  },
};

module.exports = {
  axios: createAxiosInstance(github, 'github'),
};
