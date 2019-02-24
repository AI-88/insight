import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import ContentLayout from '../utils/ContentLayout';
import Sidebar from './Sidebar';
import './App.css';

const Landing = lazy(() => import('./Landing'));
const Home = lazy(() => import('./Home'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Sidebar />
          <ContentLayout>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Switch>
                <Route exact path='/' render={() => <Landing />} />
                <Route exact path='/home' render={() => <Home />} />
              </Switch>
            </Suspense>
          </ContentLayout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
