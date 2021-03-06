import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Employees} from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const EmployeeList = (props) => {
  return (
    <div>
      <div className="employee__list">
        {props.employees.map(employee => <EmployeeDetail {...employee} key={employee._id} /> ) }
      </div>
    </div>
  );
};


export default createContainer(()=> {
  //set up subscription
  Meteor.subscribe('employees');

  //return an object. Whatever we return will be sent to EmployeeList as props
  return { employees: Employees.find({}).fetch() };
}, EmployeeList);
