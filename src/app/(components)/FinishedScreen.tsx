import React from "react";
type FinishedScreenProps = {
  points: number;
  maxpoints: number;
  highscore: number;
  dispatch: (action: { type: string }) => void;
};
const FinishedScreen = ({
  points,
  maxpoints,
  highscore,
  dispatch,
}: FinishedScreenProps) => {
  const percentage = Math.ceil((points / maxpoints) * 100);
  return (
    <>
      <div className="mt-8 px-5 py-4 text-white bg-blue-500 rounded-full">
        <p className="text-xl font-bold">
          You Got {points} out of {maxpoints} {percentage}%
        </p>
      </div>
      <p className="mt-5 text-bold">HighScore: {highscore} Points</p>
      <div className="mt-5 w-full flex justify-end items-end">
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="bg-blue-500 lg:me-[20rem] sm:me-[4rem] md:me-0 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Restart Quiz
        </button>
      </div>
    </>
  );
};

export default FinishedScreen;
