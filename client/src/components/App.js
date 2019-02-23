import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

const Landing = lazy(() => import('./Landing'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path='/' render={() => <Landing />} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
