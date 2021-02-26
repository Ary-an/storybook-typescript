import { ChangeEvent, FormEvent } from "react";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOADING = "LOADING";

export interface State {
  email: string;
  isLoggedIn: boolean;
}

export interface loginData {
  email: string;
  password: string;
}

interface loadingAction {
  type: typeof LOADING;
}

interface errorAction {
  type: typeof LOGIN_ERROR;
  payload: string;
}

interface successAction {
  type: typeof LOGIN_SUCCESS;
  payload: string;
}

export type Action = loadingAction | errorAction | successAction;

export interface LoginFormProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  email?: string;
  password?: string;
}
