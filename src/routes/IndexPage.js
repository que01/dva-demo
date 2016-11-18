import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';

import { Row, Col } from 'antd';

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Row style={{width:'1000px',margin:'0 auto'}}>
        <Col span={6}>col-12</Col>
        <Col span={18}>col-12</Col>
      </Row>
    )
  }
}

export default connect()(App) ;
