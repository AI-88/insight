import React from 'react';
import { Button, Icon } from 'antd';

const Landing = () => (
  <div>
    <h1>Landing Page</h1>
    <Button type='primary' className='google-button' size='large'>
      <a href='/auth/google'>
        <Icon type='google' /> Sign in With Google
      </a>
    </Button>
  </div>
);

export default Landing;
