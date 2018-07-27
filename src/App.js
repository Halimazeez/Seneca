import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Toggle from './Toggle';

class App extends Component {
  //es7 proptypes
  static propTypes = {
    options: PropTypes.array,
    correct: PropTypes.bool
  };

  static defaultProps = {
    correct: false,
    options: [0, 0, 0]
  };

  state = {
    correct: false,
    options: [0, 0, 1]
  };

  disable = () => {
    this.setState({ correct: true });
  };

  enable = () => {
    this.setState({ correct: false });
  };

  change = (arrayIndex, row) => {
    const { options } = this.state;

    //get next value (aka nextProps)
    let newnum = (arrayIndex = 1 - arrayIndex);

    //set options[index ] to oppposite value for toggle swap
    options[row] = newnum;
    console.log(arrayIndex);

    //cause a re-render of components and updating new state
    //use callback function to check if nextProps give correct answer
    this.setState(
      {
        options
      },
      () => {
        this.check();
      }
    );
  };

  check = () => {
    const { options } = this.state;
    //disable input if answer is correct
    if (options[0] === 0 && options[1] === 1 && options[2] === 0) {
      this.disable();
    } else {
      //only for debug purposes
      this.enable();
    }
  };

  render() {
    const { correct } = this.state;
    return (
      <div
        className={
          correct === false
            ? 'container container-correct'
            : 'container container-incorrect'
        }
        disabled={this.state.correct}
      >
        <div className="wrapper">
          {this.state.options.map((num, index) => (
            <div className="row" key={index}>
              <Toggle
                arrayIndex={num}
                row={index}
                changeIndex={this.change.bind(this)}
                correct={correct}
              />
            </div>
          ))}
          <div className="paragraph">
            The answer is {this.state.correct ? 'correct!' : 'incorrect.'}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
