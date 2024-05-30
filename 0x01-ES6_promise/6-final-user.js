import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

function handleProfileSignup(firstName, lastName, filename) {
    return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
}

export default handleProfileSignup;
