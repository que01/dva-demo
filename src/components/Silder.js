import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Sider = React.createClass({
  getInitialState() {
    return {
      current: '1',
    };
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  },
  render() {
    return (
      <Menu onClick={this.handleClick}
        style={{ width: 240 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[this.state.current]}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>菜单一</span></span>}>
            <Menu.Item key="3">菜单一1</Menu.Item>
            <Menu.Item key="4">菜单一2</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>菜单二</span></span>}>
          <Menu.Item key="5">菜单二1</Menu.Item>
          <Menu.Item key="6">菜单二2</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>菜单三</span></span>}>
          <Menu.Item key="9">菜单三1</Menu.Item>
          <Menu.Item key="10">菜单三2</Menu.Item>
          <Menu.Item key="11">菜单三3</Menu.Item>
          <Menu.Item key="12">菜单三4</Menu.Item>
        </SubMenu>
      </Menu>
    );
  },
});

export default Sider
