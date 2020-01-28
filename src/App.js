import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import List from './components/List';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/newtask" component={NewTask} />
          <Route exact path="/task/:id" component={MyTask} />
          <Route exact path="/edit" component={EditTask} />
        </Switch>
      </div>
    );
  }
}