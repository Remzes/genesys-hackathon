import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {getUserDetails} from "./ducks/welcomeWidget";
import {BrowserRouter, Route} from 'react-router-dom'
import WelcomePage from './views/WelcomePage'
import ApplicationPage from './views/ApplicationPage'
import FAQPage from './views/FAQPage'
import Unsolved from './views/UnsolvedTable'
import 'antd/dist/antd.css'
import './App.css';

function App({ get }) {
  useEffect(() => {
    get()
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/landing" component={WelcomePage} />
        <Route exact path="/application" component={ApplicationPage} />
        <Route exact path="/faq" component={FAQPage} />
        <Route exact path="/unsolved" component={Unsolved} />
      </BrowserRouter>
    </div>
  );
}

export default connect(null, { get: getUserDetails })(App);
