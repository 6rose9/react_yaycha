// import { createContext, useContext, useState } from "react";
// import { Home } from "./components/Home";
import List from "./components/List";
import Item from "./components/Item";
import { useState } from "react";
import Form from "./components/Form";

export default function App() {

  const [showForm, setShowForm] = useState(false);

  const [data, setData] = useState([
    { id: 1, content: "Hello World!", name: "Alice" },
    { id: 2, content: "Hello World!", name: "Alice" },
    { id: 3, content: "Hello World!", name: "Alice" },
    { id: 4, content: "Hello World!", name: "Alice" },
  ]);

  const remove = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1;
    setData = ([...data, { id, content, name }]);
  }

  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <h1
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        Yaycha
        <button onClick={() => setShowForm(!showForm)}
          style={{
            width: 32,
            height: 32,
            borderRadius: 50,
            border: "0 none",
            background: showForm ? "#dc3545" : "#0d5efd",
            color: "white",
          }}>
          {showForm ? "x" : "+"}
        </button>
      </h1>
      {showForm && <Form add={add} />}
      <List>
        {data.map(item => {
          return <Item
            key={item.id}
            item={item}
            remove={remove}
          />
        })}
      </List>
    </div>
  )
}