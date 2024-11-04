import React from "react";
type QuestionsProp = {
  questions: number;
  dispatch: (type: { type: string; payload: undefined }) => void;
};
const StartScreen = ({ questions, dispatch }: QuestionsProp) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full my-5 space-y-4">
      <h1 className="text-2xl font-bold"> Are You Ready To Play</h1>
      <p>{questions} Questions Are Random in this Game</p>
      <button
        onClick={() => dispatch({ type: "start", payload: undefined })}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Get Started
      </button>
    </div>
  );
};

export default StartScreen;
