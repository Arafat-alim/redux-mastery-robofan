import {
  CONSTANT_SEARCH_FIELD,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

//ye action jyga reducer ko ..
export const setSearchField = (text) => ({
  type: CONSTANT_SEARCH_FIELD,
  payload: text,
});

//dusra action jayga reducer
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .then((error) => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
};
