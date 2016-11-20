import request from '../utils/request';
import qs ,{ parse } from 'qs';
import FormdataWrapper from 'object-to-formdata';
import merge from 'merge-object';
import {rapHost, onlinePath} from '../config/config'

const cookieTrue = {
  credentials: 'include'
};
const jsonConf = {
  headers: {
    'Content-Type': 'application/json'
  }
}

function getUrl(smarturl,flag) {
  if(flag){
    return rapHost + '/' + smarturl;
  }else{
    return onlinePath + smarturl;
  }
}

async function POST(url,params,isJson){
  if(isJson == undefined){isJson = false};
  return request( url,merge({
    method: 'POST',
    body:isJson?JSON.stringify(params):FormdataWrapper(params),
  },isJson?merge(jsonConf,cookieTrue):cookieTrue),rapFlag);
}

async function GET(url,params){
  return request( url + `?${qs.stringify(params)}`,merge({
    method: 'GET',
  },cookieTrue));
}

export {
  POST,GET
}
