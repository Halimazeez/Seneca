import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { data } from './data';

class Toggle extends Component {
  sendchange = () => {
    //call parent function, sending index and row of interacted component
    this.props.changeIndex(this.props.arrayIndex, this.props.row);
  };

  render() {
    const { row, arrayIndex } = this.props;
    console.log(arrayIndex);

    return (
      <div className="rectangle">
        <div
          onClick={this.sendchange}
          className={
            arrayIndex === 0
              ? 'option option-active'
              : 'option option-notactive'
          }
        >
          {data.text[row][1]}
        </div>
        <div
          onClick={this.sendchange}
          className={
            arrayIndex === 1
              ? 'option option-active'
              : 'option option-notactive'
          }
        >
          {data.text[row][2]}
        </div>
      </div>
    );
  }
}

export default Toggle;
