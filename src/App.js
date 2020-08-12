import React from 'react';
import {Grid, Row } from "react-flexbox-grid";
import logo from './img/LOGO-justCircle.svg'
import './mysass.css';


function App() {
  return (
    <Grid className="header">
      <Row>
          <div><img src={logo} alt={logo} className="logo-animate" /></div>
      </Row>
    </Grid>
  )
}

export default App;
