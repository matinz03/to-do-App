import { useState } from "react";
import Logo from "./ui/Logo.jsx";
import Form from "./ui/Form.jsx";
import PackingList from "./utils/PackingList.jsx";
import Stats from "./ui/Stats.jsx";
function App() {
  const [list, setList] = useState([]);

  function addToList(item) {
    setList((list) => [...list, item]);
  }

  function deleteItem(id) {
    const filtered_item = list.filter((item) => item.id !== id);
    setList(filtered_item);
  }

  function markPacked(id) {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setList(updatedList);
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure that you want to clear the list?"
    );
    if (confirmed) setList([]);
  }

  return (
    <div className="w-full h-screen grid grid-rows-[auto_auto_1fr_auto]">
      <Logo />
      <Form onAddItem={addToList} />
      <PackingList
        listobj={list}
        itemDelete={deleteItem}
        onPacked={markPacked}
        onClearList={handleClearList}
      />
      <Stats list={list} />
    </div>
  );
}
export default App;
