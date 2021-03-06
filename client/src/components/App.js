import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Spin, Icon } from 'antd';
import { fetchCurrentUser } from '../actions';
import ContentLayout from '../utils/contentLayout';
import requireAuth from '../utils/requireAuth';
import Sidebar from './Sidebar';
import './App.css';

const Landing = lazy(() => import('./Landing'));
const Home = lazy(() => import('./Home'));

class App extends Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Sidebar />
          <ContentLayout>
            <Suspense fallback={
              (
                <div className='spinner-container'>
                  <Spin
                    size='large'
                    indicator={<Icon type='loading' />}
                  />
                </div>
              )
            }>
              <Switch>
                <Route exact path='/' render={() => {
                  const { data } = this.props.current_user;
                  if (data) {
                    return <Redirect to='/home' />;
                  } else {
                    return <Landing />;
                  }
                }}
                />
                <Route exact path='/home' component={requireAuth(Home)} />
              </Switch>
            </Suspense>
          </ContentLayout>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ current_user }) => {
  return {
    current_user
  };
};

export default connect(mapStateToProps, { fetchCurrentUser })(App);
