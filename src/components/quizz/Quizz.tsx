import React, { useState } from "react";
import {
  Container,
  CssBaseline,
  Typography,
  Button,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormControl,
  Box,
  Paper
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

import { RootState } from "../../redux/store";
import { logout } from "../../redux/actions/auth";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe"],
    correctAnswer: "Blue Whale"
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen"],
    correctAnswer: "Carbon Dioxide"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Au", "Ag"],
    correctAnswer: "Au"
  },
  {
    question: "How many continents are there in the world?",
    options: ["5", "6", "7"],
    correctAnswer: "7"
  },
  {
    question: "Which gas makes up the majority of Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen"],
    correctAnswer: "Nitrogen"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Venus", "Jupiter"],
    correctAnswer: "Jupiter"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Korea", "Japan"],
    correctAnswer: "Japan"
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Brain", "Skin"],
    correctAnswer: "Skin"
  },
  {
    question: "Which gas do plants give off during photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Methane"],
    correctAnswer: "Oxygen"
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3"],
    correctAnswer: "2"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter"],
    correctAnswer: "Mars"
  }
];

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
  quizContainer: {
    maxWidth: "600px",
    padding: theme.spacing(3),
    borderRadius: "8px", // Rounded corners for the container
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow
    background: "#fff" // Container background color
  },
  question: {
    marginBottom: theme.spacing(3),
    fontWeight: "bold"
  },
  buttonGroup: {
    marginTop: theme.spacing(3),
    display: "flex",
    justifyContent: "space-between"
  },
  button: {
    minWidth: "100px"
  },
  logoutButton: {
    position: "fixed",
    top: "5%",
    right: "5%",
    width: "40px",
    height: "40px",
    border: "1px solid black",
    cursor: "pointer",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const Quiz: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useSelector((state: RootState) => state.auth.email);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSkip = () => {
    setSelectedOption("");
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmit = () => {
    // Calculate and display the result
    navigate(`/quiz/success?score=${score}`);
  };

  const handleReset = () => {
    setSelectedOption("");
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const currentQues = questions[currentQuestion];

  return (
    <div className={classes.root}>
      <div className={classes.logoutButton} onClick={handleLogout}>
        <PowerSettingsNewIcon />
      </div>
      <CssBaseline />
      <Container
        component="main"
        maxWidth="md"
        className={classes.quizContainer}
      >
        <Typography variant="h5" className={classes.question}>
          Hi, {email}
        </Typography>
        <Typography variant="h6" className={classes.question}>
          Question {currentQuestion + 1}/{questions.length}
        </Typography>
        <Paper variant="outlined" elevation={3} className={classes.question}>
          <Typography variant="body1" component="p">
            {currentQues.question}
          </Typography>
        </Paper>
        <FormControl component="fieldset" className={classes.question}>
          <RadioGroup
            aria-label="options"
            name="options"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            {currentQues.options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Box className={classes.buttonGroup}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            disabled={currentQuestion === 0}
            onClick={handlePrev}
          >
            Prev
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSkip}
          >
            Skip
          </Button>
          {currentQuestion === questions.length - 1 ? (
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleNext}
            >
              Next
            </Button>
          )}
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={handleReset}
          >
            Reset
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Quiz;
