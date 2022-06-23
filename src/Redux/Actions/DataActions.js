import {
  FUCTIONS_BANQUETING_DATA,
  CALLS_RESPONSE,
  TEAM_MEMBER,
} from "../Constants/ActionTypes";

export const FunctionsData = (data) => async (dispatch) => {
  // console.log("Redux user: " + user);
  dispatch({
    type: FUCTIONS_BANQUETING_DATA,
    payload: data,
  });
};
export const CallsResponseData = (data) => async (dispatch) => {
  // console.log("Redux user: " + user);
  dispatch({
    type: CALLS_RESPONSE,
    payload: data,
  });
};
  export const TeamMemberData = (data) => async (dispatch) => {
  // console.log("Redux user: " + user);
  dispatch({
    type: TEAM_MEMBER,
    payload: data,
  });
};
