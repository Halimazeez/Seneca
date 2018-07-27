import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { data } from './data';
import classNames from 'classnames';

class Toggle extends Component {
  //es7 proptypes
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

  //functional styling gather using classNames with passed i to data ref
  //usage is such as an automatic event handler (React strongpoint)
  getClassNames = i => {
    const { arrayIndex, correct } = this.props;

    console.log('called');
    return classNames({
      option: true,
      'option-active': arrayIndex === i,
      'option-notactive': arrayIndex != i,
      'option-active-incorrect': arrayIndex === i && correct === false,
      'option-active-correct': arrayIndex === i && correct === true
    });
  };
  render() {
    const { row } = this.props;

    return (
      <div className="rectangle">
        <div onClick={this.sendchange} className={this.getClassNames(0)}>
          {data.text[row][1]}
        </div>
        <div onClick={this.sendchange} className={this.getClassNames(1)}>
          {data.text[row][2]}
        </div>
      </div>
    );
  }
}

export default Toggle;
