import React from "react";
type QuestionsProp = {
  question: any;
  anwer: number;
  dispatch: (type: { type: string; payload: undefined }) => void;
};
const Question = ({ question, dispatch, answer }: QuestionsProp) => {
  console.log(question);
  return (
    <div className="mt-5">
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

function Options({ question, dispatch, answer }: { question: any }) {
  const hasAnswer = answer !== null;
  return (
    <div className="mt-5">
      <div>
        {question.options.map((option, index) => (
          <button
            disabled={hasAnswer}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            className={` flex flex-col mt-3 justify-center items-center w-full rounded-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ${
              hasAnswer
                ? index === question.correctOption
                  ? "bg-green-500"
                  : ""
                : ""
            }`}
            key={Math.random()}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
