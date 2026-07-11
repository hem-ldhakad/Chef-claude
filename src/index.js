import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from "./nav.js"
import Main from "./main.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Nav/>
    <Main/>
  </div>
);
