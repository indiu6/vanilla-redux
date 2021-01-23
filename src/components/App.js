import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Details from '../routes/Details';
import Home from '../routes/Home';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/:id" exact>
        <Details />
      </Route>
    </HashRouter>
  );
}

export default App;
