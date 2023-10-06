import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
var mongoose = require("mongoose");
require('dotenv').config();

function App() {
  let [cardNumber, setCardNumber] = useState("");
  let [message, setMessage] = useState("");
  return (
    <div className="App">
      {/* <input type = "number" value = {cardNumber} onChange = {validateCreditCard} />
         <p> {message} </p> */}
    </div>
  );
}

export default App;
