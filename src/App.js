import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Toggle from './Toggle';
import Refresh from './Refresh';
class App extends Component {
  //es7 proptypes and class intitalisation
  static propTypes = {
    options: PropTypes.array,
    correct: PropTypes.bool,
    basestate: PropTypes.object
  };

  static defaultProps = {
    correct: false,
    options: [0, 0, 1]
  };

  state = {
    correct: false,
    options: [0, 0, 1]
  };

  disable() {
    this.setState({ correct: true });
  }

  enable() {
    this.setState({ correct: false });
  }

  change(arrayIndex, row) {
    const { options } = this.state;

    //get opposite value (aka nextProps) to current state
    let newnum = (arrayIndex = 1 - arrayIndex);

    //set options[index] to oppposite value for toggle swap
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
  }

  check() {
    const { options } = this.state;
    //disable input if answer is correct
    if (options[0] === 0 && options[1] === 1 && options[2] === 0) {
      this.disable();
    } else {
      //only for debug purposes
      this.enable();
    }
  }

  reset = () => {
    this.setState({
      correct: false,
      options: [0, 0, 1]
    });
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
      >
        <div className={correct ? 'disabled wrapper' : 'wrapper'}>
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
          <Refresh reset={this.reset.bind(this)} correct={correct} />
        </div>
      </div>
    );
  }
}

export default App;
