import {
  FUCTIONS_BANQUETING_DATA,
  CALLS_RESPONSE,
  TEAM_MEMBER

} from "../Constants/ActionTypes";

const appState = {
  functionData: { isDetail: false },
  callResponse: { isDetail: false },
  teamMemberData:{}
};

function DataReducer(state = appState, action) {
  switch (action.type) {
    case FUCTIONS_BANQUETING_DATA:
      return {
        ...state,
        functionData: action.payload,
      };
    case CALLS_RESPONSE:
      return {
        ...state,
        callResponse: action.payload,
      };
    case TEAM_MEMBER:
      return {
        ...state,
        teamMemberData: action.payload,
      };
    default:
      return state;
  }
}

export default DataReducer;
