import * as actions from "../actions";

const initialState = { message: "" };

const messageReducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === actions.SEND) {
    newState.message = action.message;
  }
  return newState;
};

export default messageReducer;
