export const checkForm = (formInput, answerType) => {
  if (formInput.question === "") return false;
  switch (answerType) {
    case "freeText":
      return true;
    case "range":
      if (formInput.min === "" || formInput.max === "") return false;
      return true;
    case "singleChoice":
      if (
        formInput.option1 === "" ||
        formInput.option2 === "" ||
        formInput.option3 === "" ||
        formInput.option4 === ""
      )
        return false;
      return true;
    default:
      return false;
  }
};

export const creatQuestionObject = (formInput, answerType) => {
  const qId = Date.now();
  let content = {
    qId,
    question: formInput.question,
    answerType,
    answers: {},
  };

  switch (answerType) {
    case "freeText":
      content.answers.freeText = "";
      break;
    case "range":
      content.answers.min = formInput.min;
      content.answers.max = formInput.max;
      break;
    case "singleChoice":
      content.answers.option1 = formInput.option1;
      content.answers.option2 = formInput.option2;
      content.answers.option3 = formInput.option3;
      content.answers.option4 = formInput.option4;
      break;
    default:
      break;
  }
  return content;
};
