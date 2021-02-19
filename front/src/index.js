import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Loading from './components/layout/loading';

const App = React.lazy(() => import('./App.js'));

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<Loading/>}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();