import React from "react";

const listItemStyle = {
  background: "#f2cc96",
  border: "1px solid black",
  borderRadius: "3px",
  padding: "10px",
  margin: "10px 0",
};

const ListItem = ({ question, answerType, answers }) => {
  const renderAnswers = () => {
    return Object.keys(answers).map((key, index) => {
      return (
        <p key={index}>
          {key}: {answers[key]}
        </p>
      );
    });
  };
  return (
    <div style={listItemStyle}>
      <p>answerType: {answerType}</p>
      <p>question: {question}</p>
      {renderAnswers()}
    </div>
  );
};

export default ListItem;
