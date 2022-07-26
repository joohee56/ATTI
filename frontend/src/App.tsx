import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import AddCommentIcon from "@mui/icons-material/AddComment";
import ClassMeeting from "./pages/ClassMeeting";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <ClassMeeting />
      </header>
      <div>
        <AddCommentIcon sx={{ fontSize: "30px" }} color="action" />
      </div>
    </div>
  );
}

export default App;
