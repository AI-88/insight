import React, { Component } from 'react';
import { Layout } from 'antd';
import './ContentLayout.css';
const { Content } = Layout;

class ContentLayout extends Component {
  render() {
    return (
      <Layout className='layout'>
        <Content className='content'>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}

export default ContentLayout;
