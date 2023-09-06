import React from "react";
import { Container, CssBaseline, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
    width: "100vw"
  },
  paper: {
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "8px",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    background: "#fff"
  },
  message: {
    marginBottom: theme.spacing(2)
  }
}));

const Success: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const score = queryParams.get("score");

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" maxWidth="sm">
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h4" component="h1" className={classes.message}>
            Quiz Completed Successfully!
          </Typography>
          <Typography variant="body1">
            Congratulations on completing the quiz. You score is {score}/13
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default Success;
