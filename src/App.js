import React from 'react';
import { Shop } from './Shop';
import { Task } from './Task';
import { Task2 } from './Task2';
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => <div className="App">
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ Shop } />
      <Route exact path="/task" component={ Task } />
      <Route exact path="/task2" component={ Task2 } />
    </div>
  </BrowserRouter>
</div>;

export default App;
