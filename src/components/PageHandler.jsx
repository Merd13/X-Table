import React from 'react';
// import PropTypes from 'prop-types';
import MenuPanel from './MenuPanel.jsx';
import BodyPanel from './BodyPanel.jsx';
import styles from '../generalStyles.css';

class PageHandler extends React.Component {
  constructor () {
    super();

    this.state = {
      bodyTitle: 'Nothing',
      bodyColor: 'pink',
    };

    this.changeBody = this.changeBody.bind(this);
  }

  changeBody(text) {
    console.log('xxxxxxxxxxxxxx', text);
    this.setState({bodyTitle: text});

  }

  render () {
    console.log('voy a rendering!', this.state);
    return (
      <div className={styles.pageHandlerStyle}>
        <MenuPanel selectedTitle={this.state.bodyTitle} changeBody={this.changeBody}/>
        <BodyPanel title={this.state.bodyTitle} bColor={this.state.bodyColor}/>
      </div>

    )
  }
}

export default PageHandler;