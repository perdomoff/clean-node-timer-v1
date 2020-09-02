import React, { useState } from "react";

import "./App.css";
import socket from "./socket";

const attachTimeToDiv = (serverTime: string) => {
  console.log("time received:  " + serverTime);
  document!.getElementById("#addTimeHere")!.textContent = serverTime;
};

function App() {
  console.log("inside app function:  ");
  socket.on("timer", (theTime: string) => {
    console.log("time received frontend:" + theTime);
    attachTimeToDiv("theTime: " + theTime);
  });
  socket.on("connect", (msg: String) => {
    console.log("msg received frontend:" + msg);
  });
  return (
    <div className="App">
      <header className="App-header">
        <h2> Freddy's Server Time:</h2>
        <div id="#addTimeHere" className="time">
          placeholder(rendered from app.tsx)
        </div>
      </header>
    </div>
  );
}

export default App;
