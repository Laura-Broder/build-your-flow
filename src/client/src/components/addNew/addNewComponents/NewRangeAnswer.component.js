import React from "react";

const columnFlex = {
  display: "flex",
  flexDirection: "column",
};

const NewRangeAnswer = ({ onChange, formInput }) => {
  return (
    <div style={columnFlex}>
      <label htmlFor="min">Min:</label>
      <input
        type="text"
        name="min"
        id="min"
        onChange={onChange}
        value={formInput.min}
      />
      <label htmlFor="max">Max:</label>
      <input
        type="text"
        name="max"
        id="max"
        onChange={onChange}
        value={formInput.max}
      />
    </div>
  );
};

export default NewRangeAnswer;
