// authActions.ts
import { createAction } from "@reduxjs/toolkit";

export const register = createAction<{
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}>("auth/register");

export const login = createAction<{ email: string; password: string }>(
  "auth/login"
);
export const reLogin = createAction("auth/re-login");
export const logout = createAction("auth/logout");
