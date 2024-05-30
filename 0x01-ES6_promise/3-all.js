/* eslint-disable no-unused-vars */
import { uploadPhoto, createUser } from './util';

function handleProfileSignup() {
  return uploadPhoto()
    .then((photo) => createUser().then((user) => {
      console.log(photo.body, user.firstName, user.lastName);
      return { photo, user };
    }))
    .catch((error) => {
      console.error('Signup system offline', error);
    });
}

export default handleProfileSignup;
