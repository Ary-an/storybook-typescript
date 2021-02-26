import { Dispatch } from "react";
import {
  Action,
  LOADING,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  loginData,
} from "../types";

const authData: loginData[] = [
  {
    email: "aryan@gmail.com",
    password: "password123",
  },
  {
    email: "jhon@gmail.com",
    password: "admin123",
  },
  {
    email: "devid@gmail.com",
    password: "admin123",
  },
  {
    email: "user@gmail.com",
    password: "user123",
  },
];

export const loginAction = (data: loginData, callBack: (res: any) => void) => {
  return (dispatch: Dispatch<Action>) => {
    const validUser = authData.find(
      (user) => user.email === data.email && user.password === data.password
    );
    if (validUser) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: validUser.email,
      });
      callBack({
        success: "login successfully",
      });
    } else {
      callBack({
        error: "invalid email or password please provide correct details",
      });
    }
  };
};
