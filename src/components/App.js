import React, { useState } from "react";
import Form from "./Form";
import AllOrders from "./AllOrders";
import logo from "../images/logo.png";
import "./App.css";

function App() {
  const [orders, setOrders] = useState([]);

  function addOrder(order) {
    setOrders([...orders, order]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Form onAdd={addOrder} />
      <AllOrders orders={orders} />
    </div>
  );
}

export default App;
