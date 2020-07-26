import React from 'react';

//React Router DOM
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Homepage from './components/Pages/Homepage.jsx';
import Navbar from './components/Navigation/Navbar.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Homepage} />
    </BrowserRouter>
  );
};

export default App;
