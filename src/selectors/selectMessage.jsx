import { createSelector } from "reselect";

const getMessage = state => state.message;

export const selectMessage = createSelector(
  getMessage,
  message => message
);
