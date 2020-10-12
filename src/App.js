import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Navbar from "./widget/Navbar.js"
import LanguageRoute from "./routes/languageRoute.js"
function App() {
  return (
    <Router>
     <Navbar/>
     <LanguageRoute/>
  </Router>
  );
}

export default App;
