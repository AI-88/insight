import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import './Sidebar.css';
const { Sider } = Layout;

class Sidebar extends Component {
  highlightMenu() {
    const { pathname } = window.location;
    if (pathname.includes('/home')) {
      return ['0'];
    } else {
      return ['0'];
    }
  };

  renderSidebar() {
    const { data } = this.props.current_user;
    const menuItems = [
      { path: 'home', icon: 'home', text: 'Home' },
      { path: 'signout', icon: 'logout', text: 'Logout' }
    ];

    if (data) {
      return (
        <Sider breakpoint='lg' collapsedWidth='0' className='sidebar'>
          <Menu mode='inline' theme='dark' defaultSelectedKeys={this.highlightMenu()} className='menu'>
            {menuItems.map(({ path, icon, text}, i) => {
              if (path === 'signout') {
                return (
                  <Menu.Item key={i} className='logout-btn'>
                    <a href={`/api/${path}`}>
                      <Icon type={icon} />
                      <span className='nav-text'>{text}</span>
                    </a>
                  </Menu.Item>
                );
              } else {
                return (
                  <Menu.Item key={i}>
                    <Link to={`/${path}`}>
                      <Icon type={icon} />
                      <span className='nav-text'>{text}</span>
                    </Link>
                  </Menu.Item>
                );
              }
            })}
          </Menu>
        </Sider>
      );
    }

    return null;
  }

  render() {
    return <Fragment>{this.renderSidebar()}</Fragment>;
  }
};

const mapStateToProps = ({ current_user }) => {
  return {
    current_user
  };
};

export default connect(mapStateToProps, null)(Sidebar);
