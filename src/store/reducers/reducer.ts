import { Action, State, LOGIN_ERROR, LOGIN_SUCCESS } from "../types";

const initialState: State = {
  email: "",
  isLoggedIn: false,
};

export const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        email: action.payload,
        isLoggedIn: true,
      };

    default:
      return state;
  }
};
