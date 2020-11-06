import React from "react";

const columnFlex = {
  display: "flex",
  flexDirection: "column",
};

const NewSingeChoiceAnswer = ({ onChange, formInput }) => {
  return (
    <div style={columnFlex}>
      <label htmlFor="option1">option1:</label>
      <input
        type="text"
        name="option1"
        id="option1"
        onChange={onChange}
        value={formInput.option1}
      />
      <label htmlFor="option2">option2:</label>
      <input
        type="text"
        name="option2"
        id="option2"
        onChange={onChange}
        value={formInput.option2}
      />
      <label htmlFor="option3">option3:</label>
      <input
        type="text"
        name="option3"
        id="option3"
        onChange={onChange}
        value={formInput.option3}
      />
      <label htmlFor="option4">option4:</label>
      <input
        type="text"
        name="option4"
        id="option4"
        onChange={onChange}
        value={formInput.option4}
      />
    </div>
  );
};

export default NewSingeChoiceAnswer;
