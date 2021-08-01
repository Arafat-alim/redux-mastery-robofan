import { CONSTANT_SEARCH_FIELD } from "./constants";
//intially first app run no action and state change then define initlai state and action as empty

const initialState = {
  searchFields: " ",
};

export const searchRobots = (state = initialState, action = {}) => {
  //pure function
  switch (action.type) {
    case CONSTANT_SEARCH_FIELD:
      return { ...state, searchFields: action.type }; //updating the store
    //   break;
    default:
      return state;
    //   break;
  }
};
