import React from "react";
import {
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage';
import HatsPage from './pages/hatspage/hatspage';

function App() {
  return <Switch>
    <Route path="/" component={HomePage} exact/>
    <Route path="/shop/cats" component={HatsPage}/>
  </Switch>
}

export default App;
