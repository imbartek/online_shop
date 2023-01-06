import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import MobileMenu from "./components/layout/menu";
import Navigation from "./components/layout/nav";
import store from './store';
import User from "./views/User/User";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Navigation />
        <MobileMenu />
        <User/>
      </div>
    </Provider>
  );
};

export default App;
