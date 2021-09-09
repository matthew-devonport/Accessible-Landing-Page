import React from "react";

import Nav from "./Nav";
import Form from "./Form";

import "./App.css";

function App() {
  return (
    <>
      <header className="appHeader">
        <img src="logo.png"></img>
      </header>
      <Nav />
      <Form />
      <footer className="footer green">
        Copyright &copy; 2020 by Skrate Boardz. All rights reserved. Website
        Design &amp; Build by Matthew Devonport
      </footer>
    </>
  );
}

export default App;
