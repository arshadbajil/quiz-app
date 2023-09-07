import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./components/welcome/Welcome";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Quiz from "./components/quizz/Quizz";
import My404Component from "./components/error/404";

import { RootState } from "./redux/store";
import Success from "./components/success/Success";
import { reLogin } from "./redux/actions/auth";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    const email = localStorage.getItem("auth");
    if (email && !isAuthenticated) {
      dispatch(reLogin());
    }
  }, [dispatch, isAuthenticated]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {isAuthenticated && (
          <>
            <Route path="/quiz/conduct" element={<Quiz />} />
            <Route path="/quiz/success" element={<Success />} />
          </>
        )}
        <Route path="*" element={<My404Component />} />
      </Routes>
    </Router>
  );
};

export default App;
