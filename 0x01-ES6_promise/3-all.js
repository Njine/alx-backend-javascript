import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .all([uploadPhoto(fileName), createUser(firstName, lastName)])
    .then((res) => {
      const photoResponse = res[0];
      const userResponse = res[1];

      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
      return { photo: photoResponse, user: userResponse };
    })
    .catch(() => {
      console.log('Signup system offline');
      return { photo: null, user: null };
    });
}
