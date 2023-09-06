import React from "react";
import { Button, Container, CssBaseline, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const CenteredContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  width: "100vw",
  textAlign: "center",
  padding: theme.spacing(4)
}));

const My404Component: React.FC = () => {
  const navigate = useNavigate();

  return (
    <CenteredContainer component="main" maxWidth="xl">
      <CssBaseline />
      <div>
        <Typography variant="h4" gutterBottom>
          We can't seem to find that
        </Typography>
        <Typography variant="body1">
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
          style={{ marginTop: "1rem" }}
        >
          Back to Home
        </Button>
      </div>
    </CenteredContainer>
  );
};

export default My404Component;
