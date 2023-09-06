import React from "react";
import { Box, Button, Container, CssBaseline, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Title = styled(Typography)(() => ({
  marginBottom: "1rem",
  fontSize: "2rem", // Customize title font size
  fontWeight: "bold", // Customize title font weight
  color: "#3498db" // Customize title color
}));

const ButtonContainer = styled(Box)(() => ({
  marginTop: "2rem",
  "& button": {
    margin: "0.5rem", // Spacing between buttons
    padding: "0.75rem 2rem", // Button padding
    fontSize: "1.2rem", // Button font size
    fontWeight: "bold" // Button font weight
  }
}));

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100vw"
      }}
    >
      <CssBaseline />
      <Container component="main" maxWidth="xl">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Title variant="h4" component="h1">
            Welcome to QUIZ
          </Title>
          <ButtonContainer>
            <Button variant="contained" color="primary" onClick={handleLogin}>
              Login
            </Button>
            <Button variant="outlined" color="primary" onClick={handleRegister}>
              Register
            </Button>
          </ButtonContainer>
        </Box>
      </Container>
    </div>
  );
};

export default Welcome;
