import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'dva/router'
const breadcrumb = (props)=>{
  return (
    <Breadcrumb>
      {
        props.data.map((v,i)=>(
          <Breadcrumb.Item key={i}>
            {v.path?(<Link to={v.path}>{v.name}</Link>):v.name}
          </Breadcrumb.Item>
        ))
      }
    </Breadcrumb>
  )
};
export default breadcrumb;
