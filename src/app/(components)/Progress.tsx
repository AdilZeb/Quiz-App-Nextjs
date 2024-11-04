import React from "react";
type ProgressProps = {
  index: number;
  numquestions: number;
  points: number;
  maxpoints: number;
  answer: number | null;
};
const Progress = ({
  index,
  numquestions,
  points,
  maxpoints,
  answer,
}: ProgressProps) => {
  return (
    <header className="w-full px-7 mt-8">
      <progress
        className="progress-bar w-full h-4 rounded-lg overflow-hidden"
        max={numquestions}
        value={index + Number(answer !== null)}
      />
      <div className="flex justify-between">
        {" "}
        <p>
          Question <strong>{index + 1}</strong>/{numquestions}
        </p>
        <p>
          Points : {points} / {maxpoints}
        </p>
      </div>
    </header>
  );
};

export default Progress;
