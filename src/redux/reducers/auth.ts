// Example using createReducer from @reduxjs/toolkit

import { createReducer } from "@reduxjs/toolkit";
import { login, logout, register } from "../actions/auth";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface AuthState {
  isAuthenticated: boolean | false;
  email: string | null;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  email: null,
  error: null
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(register, (state, action) => {
      const oldUsers = localStorage.getItem("users");
      const parsedUsers = oldUsers ? JSON.parse(oldUsers) : [];

      const localStorageUsers = [
        ...parsedUsers,
        {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          password: action.payload.password
        }
      ];
      console.log(localStorageUsers);

      localStorage.setItem("users", JSON.stringify(localStorageUsers));

      state.isAuthenticated = false;
      state.email = null;
    })
    .addCase(login, (state, action) => {
      const users = localStorage.getItem("users");
      const parsedUsers = users ? JSON.parse(users) : [];

      const foundUser = parsedUsers.find(
        (user: User) => user.email === action.payload.email
      );

      if (
        !foundUser ||
        foundUser.password.toString() !== action.payload.password.toString()
      ) {
        return {
          ...state,
          isAuthenticated: false,
          email: null,
          error: "Email / password is wrong"
        };
      }

      return {
        ...state,
        isAuthenticated: true,
        email: action.payload.email,
        error: null
      };
    })
    .addCase(logout, (state) => {
      state.isAuthenticated = false;
      state.email = null;
    });
});

export default authReducer;
