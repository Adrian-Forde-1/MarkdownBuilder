import React from 'react';

//React Router DOM
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Homepage from './components/Pages/Homepage.jsx';
import Navbar from './components/Navigation/Navbar.jsx';
import MarkdownBuilder from './components/Pages/MarkdownBuilder.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/builder" component={MarkdownBuilder} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
