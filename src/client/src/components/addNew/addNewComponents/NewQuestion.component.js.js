import React from "react";

const columnFlex = {
  display: "flex",
  flexDirection: "column",
};

const NewQuestion = ({ onChange, formInput }) => {
  return (
    <div style={columnFlex}>
      <label htmlFor="question">type a new question:</label>
      <textarea
        name="question"
        id="newQuestion"
        onChange={onChange}
        value={formInput.question}></textarea>
    </div>
  );
};

export default NewQuestion;
