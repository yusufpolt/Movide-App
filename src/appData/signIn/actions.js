import {GET_USER_SIGN_IN, SET_USER_SIGN_IN} from './constants';

export const getUserSignInAction = values => {
  return {
    type: GET_USER_SIGN_IN,
  };
};

export const setUserSignInAction = ({username, password}) => {
  return {
    type: SET_USER_SIGN_IN,
    username,
    password,
  };
};
