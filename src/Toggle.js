import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { data } from './data';
import classNames from 'classnames';

class Toggle extends Component {
  static propTypes = {
    changeIndex: PropTypes.func,
    arrayIndex: PropTypes.number,
    row: PropTypes.number,
    correct: PropTypes.bool
  };

  sendchange = () => {
    //call parent function, sending index and row of interacted component
    this.props.changeIndex(this.props.arrayIndex, this.props.row);
  };

  render() {
    const { row, arrayIndex, correct } = this.props;

    const getClassNamesOne = classNames({
      option: true,
      'option-active': arrayIndex === 0,
      'option-notactive': arrayIndex != 0,
      'option-active-incorrect': arrayIndex === 0 && correct === false,
      'option-active-correct': arrayIndex === 0 && correct === true
    });

    const getClassNamesTwo = classNames({
      option: true,
      'option-active': arrayIndex === 1,
      'option-notactive': arrayIndex != 1,
      'option-active-incorrect': arrayIndex === 1 && correct === false,
      'option-active-correct': arrayIndex === 1 && correct === true
    });

    console.log(arrayIndex);

    return (
      <div className="rectangle">
        <div onClick={this.sendchange} className={getClassNamesOne}>
          {data.text[row][1]}
        </div>
        <div onClick={this.sendchange} className={getClassNamesTwo}>
          {data.text[row][2]}
        </div>
      </div>
    );
  }
}

export default Toggle;
