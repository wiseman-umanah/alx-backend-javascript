/* eslint-disable no-unused-vars */
import { uploadPhoto, createUser } from './util';

function handleProfileSignup() {
  uploadPhoto().then(
    (value) => {
      createUser().then(
        (profile) => {
          console.log(value.body, profile.firstName, profile.lastName);
        },
      );
    },
    (error) => {
      console.error('Signup system offline');
    },
  );
}

export default handleProfileSignup;
