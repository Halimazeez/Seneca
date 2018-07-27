import React, { Component } from 'react';
import './App.css';

import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="rectangle">
            <div className="option option-active">Test1</div>
            <div className="option option-notactive">Test2</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
