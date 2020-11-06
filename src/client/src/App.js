import { useState } from "react";
import AddNew from "./components/addNew/AddNew.component";
import List from "./components/list/List.component";

const appStyle = {
  display: "flex",
  padding: "20px",
};

function App() {
  const [newList, setNewList] = useState([]);

  // add new question to the list and trigger re-render
  const handleAddNew = (content) => {
    setNewList([...newList, content]);
  };

  // receive a list with a deleted item and trigger re-render
  const handleDelete = (list) => {
    setNewList([...list]);
  };

  return (
    <div className="App" style={appStyle}>
      <AddNew onSubmit={handleAddNew} />
      <List list={newList} onDelete={handleDelete} />
    </div>
  );
}

export default App;
