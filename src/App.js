import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

import Toggle from './Toggle';

class App extends Component {
  static propTypes = {
    options: PropTypes.array,
    disabled: PropTypes.bool,
    correct: PropTypes.bool
  };

  //Array for each toggle component value as key
  static defaultProps = {
    disabled: false,
    options: [0, 0, 0],
    correct: false
  };
  state = {
    options: [0, 1, 0]
  };

  disable = () => {
    this.setState({ disabled: true });
  };

  enable = () => {
    this.setState({ disabled: false });
  };

  change = (arrayIndex, row) => {
    const { options } = this.state;

    //get next value (aka nextProps)
    let newnum = (arrayIndex = 1 - arrayIndex);

    //set options[index ] to oppposite value for toggle swap
    options[row] = newnum;
    console.log(arrayIndex);

    //cause a re-render of components and updating new state
    this.setState(
      {
        options
      },
      () => {
        this.check();
      }
    );
  };

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          {this.state.options.map((num, index) => (
            <div className="row" key={index}>
              <Toggle
                arrayIndex={num}
                row={index}
                changeIndex={this.change.bind(this)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
