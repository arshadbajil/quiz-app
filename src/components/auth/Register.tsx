import React, { useState, useEffect } from "react";
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  Link
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { register } from "../../redux/actions/auth";
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

const Register: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { firstName, lastName, email, password };
    dispatch(register(data));
  };

  useEffect(() => {
    if (isAuthenticated) {
      // Redirect to the Quiz page
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
          Sign up
        </Typography>
        <FormContainer noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="lname"
                name="lastName"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="email"
                name="email"
                required
                fullWidth
                id="email"
                label="Email Address"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="new-password"
                name="password"
                required
                fullWidth
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </SubmitButton>
        </FormContainer>
        <Link component="p" variant="body2" onClick={() => navigate("/login")}>
          Already have an account? Login now
        </Link>
      </PaperContainer>
    </RootContainer>
  );
};

export default Register;
