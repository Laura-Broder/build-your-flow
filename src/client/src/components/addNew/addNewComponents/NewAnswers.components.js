import React from "react";
import NewRangeAnswer from "./NewRangeAnswer.component";
import NewSingeChoiceAnswer from "./NewSingleChoiceAnswer.component";

const answersStyle = {
  border: "1px solid black",
  padding: "10px",
};

const NewAnswers = ({ answerType, onChange, formInput }) => {
  const renderAnswers = () => {
    switch (answerType) {
      case "freeText":
        return <p>Free text</p>;
      case "range":
        return <NewRangeAnswer onChange={onChange} formInput={formInput} />;
      case "singleChoice":
        return (
          <NewSingeChoiceAnswer onChange={onChange} formInput={formInput} />
        );
      default:
        return <p>choose a question type</p>;
    }
  };

  return <div style={answersStyle}>{renderAnswers()}</div>;
};

export default NewAnswers;
