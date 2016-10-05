import React, {Component} from 'react';
import {render} from 'react-dom';

const App = (props) => {
  return (
    <div></div>
  );
}

// after meteor loads in the browser, render my app to the DOM
Meteor.startup(() => {
  render( <App />, document.querySelector('.container') )
});
