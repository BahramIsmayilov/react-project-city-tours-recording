import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Tourlist from "./components/Tourlist";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Tourlist />
    </React.Fragment>
  );
}

export default App;
