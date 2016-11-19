import React from 'react';
import { connect } from 'dva';
class Option extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (<div>菜单二1</div>)
  }
  componentDidMount(){
    const breadcrumbData = {
      breadcrumb:[
        {
          name:'首页',
          path:'/'
        },{
          name:'菜单二1'
        }
      ]
    };
    this.props.dispatch({
      type:'common/changeBreadcrumb',
      payload:breadcrumbData
    })
  }
}
function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(Option);
