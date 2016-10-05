import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

const EmployeeDetail = (props) => {
  const {name, email, phone, avatar} = props;
  return (
    <div>
      <div className="employee__detail">
        <img className="employee__avatar" src={avatar}/>
        <div className="employee__caption">
          <h3 className="employee__name">{name}</h3>
          <ul className="employee__caption-list">
            <li className="employee__email">Email: {email}</li>
            <li className="employee__phone">Phone: {phone}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
