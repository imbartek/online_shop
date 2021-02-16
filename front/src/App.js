import React from 'react';
import './App.css';
import MobileMenu from './components/layout/menu';
import Navigation from './components/layout/nav';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <MobileMenu />
    </div>
  );
}

export default App;
