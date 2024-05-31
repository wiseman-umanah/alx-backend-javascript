import { uploadPhoto, createUser } from './util';

const asyncUploadUser = async () => {
  let photo;
  let user;

  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (e) {
    photo = null;
    user = null;
  }

  console.log({ photo, user });
};

export default asyncUploadUser;
