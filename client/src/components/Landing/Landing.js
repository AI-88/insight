import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Landing = () => (
  <div>
    <h1>Landing Page</h1>
    <Button><Link to='/home'>To Home</Link></Button>
  </div>
);

export default Landing;
