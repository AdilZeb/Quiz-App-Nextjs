import React from "react";

const NextButton = ({
  dispatch,
  answer,
  index,
  numquestions,
}: {
  dispatch: any;
}) => {
  if (answer === null) return null;
  if (index < numquestions - 1)
    return (
      <div className="w-full flex justify-end items-end me-10">
        <button
          className="  mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full "
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    );
  if (index === numquestions - 1)
    return (
      <div className="w-full flex justify-end items-end me-10">
        <button
          className="  mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full "
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      </div>
    );
};

export default NextButton;
