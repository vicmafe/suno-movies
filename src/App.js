import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Provider from './Context/Provider'
import Home from './Pages/Home';
import GlobalStyle from './Style/GlobalStyle.js'

function App() {
  return (
    <Provider>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
