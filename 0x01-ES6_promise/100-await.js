import { uploadPhoto, createUser } from './util';

async function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      console.log({ photo: values[0], user: values[1] });
    })
    .catch(() => {
      console.log({ photo: null, user: null });
    });
}

export default asyncUploadUser;
