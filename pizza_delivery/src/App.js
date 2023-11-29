import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <Switch>
        <Route path="/about" component={About} exact />
      </Switch> */}
    </BrowserRouter>
  );
}

export default App;