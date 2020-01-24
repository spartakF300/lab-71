import React from 'react';

import './App.css';
import Dishes from "./Container/Dishes/Dishes";
import Header from "./Components/Header/Header";
import {Switch,Route} from "react-router";
import Edit from "./Container/Edit/Edit";
import Orders from "./Container/Orders/Orders";

function App() {
  return (
    <div className="App">

        <Header/>
        <Switch>
            <Route path="/" exact component={Dishes}/>
            <Route path="/edit/:id" component={Edit}/>
            <Route path="/orders" component={Orders}/>
        </Switch>
    </div>
  );
}

export default App;
