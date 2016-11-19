import React from 'react';
import { connect } from 'dva';
import {Table,Icon} from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: 'LastLogin',
    dataIndex: 'lastLogin',
    key: 'lastLogin',
  }
];


class Option extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let {data,loading} = this.props.test.list;
    let pagination = this.props.test.pagination;
    return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={pagination}
        onChange={this.handleTableChange.bind(this)}
        loading={loading}
      />
    )
  }
  handleTableChange(pagination, filters, sorter){
    this.props.dispatch({
      type:'test/changePage',
      payload:{
        pagination:{
          current:pagination.current,
          pageSize:pagination.pageSize,
          showQuickJumper: true,
          loading:true
        }
      }
    });
    this.fetch(pagination.current)
  }
  fetch(current){
    // 更新列表
    this.props.dispatch({
      type:'test/fetchRemote',
      payload:{
        current:current,
        pageSize:10,
        loading:false,
      }
    });
  }
  componentDidMount(){
    const breadcrumbData = {
      breadcrumb:[
        {
          name:'首页',
          path:'/'
        },{
          name:'菜单一1'
        }
      ]
    };
    this.props.dispatch({
      type:'common/changeBreadcrumb',
      payload:breadcrumbData
    });
    this.fetch(1);
  }
}
function mapStateToProps({ common,test }) {
  return {common,test};
}
export default connect(mapStateToProps)(Option);
