import React, { useState } from "react";
import NewAnswers from "./addNewComponents/NewAnswers.components";
import NewQuestion from "./addNewComponents/NewQuestion.component.js";
import { checkForm, creatQuestionObject } from "./addNewFunctions/processForm";

const headerStyle = {
  marginBottom: "10px",
};

const formContainerStyle = {
  background: "#f2cc96",
  border: "1px solid black",
  borderRadius: "3px",
  padding: "10px",
  width: "100%",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  margin: "10px",
};
const btnStyle = {
  background: "#d35823",
  padding: "5px",
  margin: "5px 0",
  border: "none",
  color: "#f3f3f3",
};

const AddNew = ({ onSubmit }) => {
  const initForm = {
    question: "",
    min: "",
    max: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  };
  const [answerType, setAnswerType] = useState("freeText");
  const [formInput, setFormInput] = useState(initForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    // check all required fields are full
    if (!checkForm(formInput, answerType)) {
      return console.log("some fields are empty");
    }
    // create an object of the question as needed in the .json file and send it to the List.component
    const content = creatQuestionObject(formInput, answerType);
    onSubmit(content);
    // reset form
    setFormInput(initForm);
  };
  // save the answers type chosen and trigger re-render to display the relevant form fields
  const handleClick = (e) => {
    setAnswerType(e.target.name);
  };

  // save input value
  const handleInputChange = (e) => {
    const term = e.target.value;
    const name = e.target.name;
    const newFormInput = { ...formInput };
    newFormInput[name] = term;

    setFormInput({ ...newFormInput });
  };

  return (
    <div style={formContainerStyle}>
      <h2 style={headerStyle}>Add a new question</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <NewQuestion onChange={handleInputChange} formInput={formInput} />
        <p>Choose an answer type</p>
        <div className="answerTypeContainer" style={buttonContainerStyle}>
          <button
            style={btnStyle}
            type="button"
            name="freeText"
            onClick={handleClick}>
            Free Text
          </button>
          <button
            style={btnStyle}
            type="button"
            name="range"
            onClick={handleClick}>
            Range
          </button>
          <button
            style={btnStyle}
            type="button"
            name="singleChoice"
            onClick={handleClick}>
            Single Choice
          </button>
        </div>
        <NewAnswers
          answerType={answerType}
          onChange={handleInputChange}
          formInput={formInput}
        />
        <button style={btnStyle} type="submit" name="add">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddNew;
