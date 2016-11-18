import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

const NormalLoginForm = Form.create()(React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
	  <div style={{width:'400px',margin:"0 auto"}}>
		  <Form onSubmit={this.handleSubmit} className="login-form">
			<FormItem>
			  {getFieldDecorator('userName', {
				rules: [{ required: true, message: 'Please input your username!' }],
			  })(
				<Input addonBefore={<Icon type="user" />} placeholder="Username" />
			  )}
			</FormItem>
			<FormItem>
			  {getFieldDecorator('password', {
				rules: [{ required: true, message: 'Please input your Password!' }],
			  })(
				<Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
			  )}
			</FormItem>
			<FormItem>
			  {getFieldDecorator('remember', {
				valuePropName: 'checked',
				initialValue: true,
			  })(
				<Checkbox>Remember me</Checkbox>
			  )}
			  <a className="login-form-forgot">Forgot password</a>
			  <Button type="primary" htmlType="submit" className="login-form-button">
				Log in
			  </Button>
			  Or <a>register now!</a>
			</FormItem>
		  </Form>
	</div>
    );
  },
}));
export default connect()(NormalLoginForm) ;
