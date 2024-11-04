/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useReducer } from "react";
import Header from "./(components)/Header";
import Main from "./(components)/Main";
import StartScreen from "./(components)/StartScreen";
import Question from "./(components)/Question";
import NextButton from "./(components)/NextButton";
import Progress from "./(components)/Progress";
import FinishedScreen from "./(components)/FinishedScreen";
type StateProps = {
  questions: { correctOption: number; points: number }[];
  status: string;
  index: number;
  answer: number | null;
  points: number;
  highscore: number;
};
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
};
function reducer(state: StateProps, action: { type: string; payload: any }) {
  console.log(state);
  switch (action.type) {
    case "dataRecieved":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "error":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "newAnswer":
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "reset":
      return { ...initialState, questions: state.questions, status: "ready" };
    default:
      throw new Error("Unknown action");
  }
}
async function fetchData() {
  const response = await fetch("http://localhost:3000/questions");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
export default function Home() {
  const [{ questions, status, index, answer, points, highscore }, dispatch] =
    useReducer(reducer, initialState);
  const numquestions = questions.length;
  const maxpoints = questions.reduce(
    (previousValue: number, currentValue: number) =>
      previousValue + currentValue.points,
    0
  );
  useEffect(() => {
    fetchData()
      .then((data) => {
        dispatch({ type: "dataRecieved", payload: data });
      })
      .catch((error) => {
        return dispatch({
          type: "error",
          payload: undefined,
        });
      });
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center mt-4  items-center w-full h-full">
        <Header />
        <Main>
          {status === "loading" && <p>Loading...</p>}
          {status === "error" && <p>Error</p>}
          {status === "ready" && (
            <StartScreen questions={numquestions} dispatch={dispatch} />
          )}
          {status === "active" && (
            <>
              {" "}
              <Progress
                index={index}
                numquestions={numquestions}
                points={points}
                maxpoints={maxpoints}
                answer={answer}
              />
              <Question
                question={questions[index]}
                dispatch={dispatch}
                answer={answer}
              />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numquestions={numquestions}
              ></NextButton>
            </>
          )}
          {status === "finished" && (
            <FinishedScreen
              points={points}
              maxpoints={maxpoints}
              highscore={highscore}
              dispatch={dispatch}
            />
          )}
        </Main>
      </div>
    </>
  );
}
