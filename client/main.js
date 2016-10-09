//Everthing here only execute on the client

import React, {Component} from 'react';
import {render} from 'react-dom';
import EmployeeList from './components/employee_list';

const App = (props) => {
  return (
    <div>
      <EmployeeList />
    </div>
  );
}

// after meteor loads in the browser, render my app to the DOM
Meteor.startup(() => {
  render( <App />, document.querySelector('.container') )
});
