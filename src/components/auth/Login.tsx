import React, { useState, useEffect } from "react";
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  Button,
  Link
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../redux/actions/auth";
import { RootState } from "../../redux/store";

const RootContainer = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  width: "100vw"
}));

const PaperContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}));

const AvatarContainer = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main
}));

const FormContainer = styled("form")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(3)
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2)
}));

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const error = useSelector((state: RootState) => state.auth.error);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Your form submission logic here
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/quiz/conduct");
    }
  }, [isAuthenticated, navigate]);

  return (
    <RootContainer component="main" maxWidth="xl">
      <CssBaseline />
      <PaperContainer>
        <AvatarContainer>
          <LockOutlinedIcon />
        </AvatarContainer>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <FormContainer noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </SubmitButton>
        </FormContainer>
        <Link
          component="p"
          variant="body2"
          onClick={() => navigate("/register")}
        >
          New user? Register now
        </Link>
        {error && <small style={{ color: "red" }}>{error}</small>}
      </PaperContainer>
    </RootContainer>
  );
};

export default Login;
