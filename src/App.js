import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Provider from './Context/Provider';
import Catalog from './Pages/Catalog';
import Details from './Pages/Details';
import Home from './Pages/Home';
import GlobalStyle from './Style/GlobalStyle.js';

function App() {
  return (
    <Provider>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/catalog" component={ Catalog } />
          <Route exact path="/details/:id" component={ Details } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
