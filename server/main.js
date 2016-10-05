//only execute on the server
import _ from 'lodash';
import {Meteor} from 'meteor/meteor';
import {Employees} from '../imports/collections/employees';
import {image, helpers} from 'faker';

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
      const {name, email, phone} = helpers.createCard();

      Employees.insert({
        name, email, phone,
        avatar: image.avatar()
      });

    });

  }


  // Set up a publish on our server so we have access to it on the client side
  // but we set a limit to 20 items on this newly created 'employees' publication
  // so that the user only has access to 20 items per request made
  // we can think of publication as a window to our mongo db
  // obs: to remove the default access to the whole collection run: meteor remove autopublish
  Meteor.publish('employees', function() {
    return Employees.find( {}, { limit: 20 } );
  });
});
