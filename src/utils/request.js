import fetch from 'dva/fetch';
import safeeval from 'safe-eval'
import Mock from 'mockjs';

function parseText(response) {
  return response.text();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @param  {boolean} rap       是否是rap请求 true是 false 否
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options,rap) {
  if(!rap){rap = false;}
  return fetch(url, options)
    .then(checkStatus)
    .then(parseText)
    .then((data) => {
      if(rap){
        return Mock.mock(safeeval(data))
      }else{
        return safeeval(data)
      }
    })
    .catch((err) => ({ err }));
}
