import _ from 'lodash';
import {image, helpers} from 'faker';
import {Meteor} from 'meteor/meteor';
import {Employees} from '../imports/collections/employees';

Meteor.startup(() => {
  // code to run on server at startup

  //check to see if data exists in the collection so we dont create fake data everytime
  // our server starts. See if the collection has any records
  const numberRecords = Employees.find({}).count();

  if(!numberRecords) {
    // times is a lodash helper instead of using a normal for loop
    // in this case we generate 5000 card objects containing: name, email, phone, avatar image
    _.times(5000, () => {
      // this is imported from faker so we generate a complete card like object for yout fake data
      const {name, email , phone} = helpers.createCard();

      Employees.insert({
        name,
        email,
        phone,
        avatar: image.avatar()
      });
    });
  }

  console.log(numberRecords);
});
