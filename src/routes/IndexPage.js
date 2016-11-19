import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';

import Silder from '../components/Silder'

import { Row, Col, Breadcrumb } from 'antd';

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Row style={{width:'1000px',margin:'0 auto'}}>
        <Col span={24}>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
            <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span={6}>
          <Silder />
        </Col>
        <Col span={18}>
          {this.props.children||'内容区域'}
        </Col>
      </Row>
    )
  }
}

export default connect()(App) ;
