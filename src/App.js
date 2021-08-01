// import logo from './logo.svg';
import './App.css';
// import React, { Component } from 'react';
// import 'zent/css/index.css';
import 'antd/dist/antd.less'; 
import Login from './pages/login';
import Admin from './pages/admin';
import { HashRouter, Route, Switch,Redirect } from 'react-router-dom';

function App() {
  return (
  <HashRouter>
      <Switch>
        <Redirect exact={true} from="/" to="/login"></Redirect>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Admin}/>
      </Switch>
    </HashRouter>
  );
}

export default App;