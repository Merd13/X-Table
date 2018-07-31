import React from 'react';
import PropTypes from 'prop-types';
import TitleText from './TitleText.jsx';
import styles from '../generalStyles.css';
import Button from './Button.jsx';

class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };

    this.className = props.classStyle? props.classStyle : styles.buttonGroup;

    this.incNumber = this.incNumber.bind(this);
    this.decNumber = this.decNumber.bind(this);
  }

  incNumber() {
    const newNumber = this.state.number + 1;
    this.setState({number: newNumber})
  };

  decNumber() {
    const newNumber = this.state.number - 1;
    this.setState({number: newNumber})
  };

  render() {
    return (
      <div className={this.className}>
        <Button text="-" onClickFunc={this.decNumber}/>
        <TitleText text={this.state.number}/>
        <Button text="+" onClickFunc={this.incNumber}/>
      </div>
    )
  }
}

ButtonGroup.propTypes = {
  classStyle : PropTypes.any,
};

export default ButtonGroup;

