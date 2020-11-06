import React, { useEffect, useState } from "react";
import ListItem from "./listComponents/ListItem.component";
import axios from "axios";

const headerStyle = {
  marginBottom: "10px",
};

const listStyle = {
  borderLeft: "1px solid black",
  marginLeft: "10px",
  padding: "10px",
  width: "100%",
};
const btnStyle = {
  background: "#d35823",
  padding: "5px",
  margin: "5px 0",
  border: "none",
  color: "#f3f3f3",
};

const List = ({ list, onDelete }) => {
  const [newList, setNewList] = useState([]);
  const [savedMsg, setSavedMsg] = useState("");

  useEffect(() => {
    setNewList([...list]);
  }, [list]);

  useEffect(() => {
    setTimeout(() => {
      setSavedMsg("");
    }, 5000);
  }, [savedMsg]);

  const createNewFile = async (newFlow) => {
    try {
      await axios.post("http://127.0.0.1:4040/flow-api", {
        newFlow,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = () => {
    const goodbyeMsg =
      "Ok, your answers were saved. Our recruiters team will contact soon";
    const newFlow = { newList, goodbyeMsg };
    createNewFile(newFlow);
    onDelete([]);
    setSavedMsg("Your list was saved to a file");
  };

  const handleDelete = () => {
    const prevList = [...newList];
    prevList.pop();
    setNewList([...prevList]);
    onDelete([...prevList]);
  };

  const renderList = () => {
    return newList.map((item, index) => {
      return (
        <ListItem
          key={index}
          question={item.question}
          answerType={item.answerType}
          answers={item.answers}
        />
      );
    });
  };
  return (
    <div style={listStyle}>
      <h2 style={headerStyle}>Your List</h2>
      <p>{savedMsg}</p>
      <button
        style={btnStyle}
        type="button"
        name="deleteLast"
        onClick={handleDelete}
        disabled={newList.length <= 1}>
        Delete Last
      </button>
      <div>{renderList()}</div>
      <button
        style={btnStyle}
        type="button"
        name="save"
        onClick={handleSave}
        disabled={newList.length === 0}>
        Save flow to file
      </button>
    </div>
  );
};

export default List;
