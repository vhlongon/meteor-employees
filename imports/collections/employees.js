// the mongo library always come preinstalled with meteor
import {Mongo} from 'meteor/mongo';

// this creates a collection called 'employees' in the mongo db
const Employees = new Mongo.Collection('employees');

export {Employees};
