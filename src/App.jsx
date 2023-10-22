import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteList from '/src/router/Route.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <RouteList />
    </BrowserRouter>
  );
};

export default App;
