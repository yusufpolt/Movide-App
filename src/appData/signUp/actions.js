import {GET_USER_SIGN_UP, SET_USER_SIGN_UP} from './constants';

export const getUserSignUpAction = values => {
  return {
    type: GET_USER_SIGN_UP,
  };
};

export const setUserSignUpAction = ({username, password}) => {
  return {
    type: SET_USER_SIGN_UP,
    username,
    password,
  };
};
