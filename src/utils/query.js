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

async function POST(url,params,rapFlag,isJson){
  if(isJson == undefined){isJson = false};
  return request( getUrl(url,rapFlag),rapFlag?{  //如果为rap请求 就去掉 credentials: 'include'来允许跨域
    method: 'POST',
    body:isJson?JSON.stringify(params):FormdataWrapper(params),
  }:merge({
    method: 'POST',
    body:isJson?JSON.stringify(params):FormdataWrapper(params),
  },isJson?merge(jsonConf,cookieTrue):cookieTrue),rapFlag);
}

async function GET(url,params,rapFlag){
  return request( getUrl(url,rapFlag) + `?${qs.stringify(params)}`,rapFlag?{
    method: 'GET',
  }:merge({
    method: 'GET',
  },cookieTrue),rapFlag);
}

export {
  POST,GET
}
