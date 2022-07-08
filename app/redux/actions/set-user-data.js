import { USER_DATA } from "../constants";

export function setUserData(user) {
  return {
    type: USER_DATA,
    payload: user,
  };
}