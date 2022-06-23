import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  LANGUAGE,
} from "../Constants/ActionTypes";

export const userRequest = () => {
  return {
    type: USER_REQUEST,
  };
};

export const userSuccess = (user) => {
  return {
    type: USER_SUCCESS,
    payload: user,
  };
};

export const userFailure = (error) => {
  return {
    type: USER_FAILURE,
    payload: error,
  };
};
export const Language= (lng) => {
  return {
    type: LANGUAGE,
    payload: lng,
  };
};

