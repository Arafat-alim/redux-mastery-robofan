import { CONSTANT_SEARCH_FIELD } from "./constants";

export const setSearchField = (text) => ({
  type: CONSTANT_SEARCH_FIELD,
  payload: text,
});
