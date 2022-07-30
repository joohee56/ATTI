import { Route, Routes } from "react-router-dom";

//import AddCommentIcon from "@mui/icons-material/AddComment";
import Homepage from "./pages/HomePage";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import ClassMeeting from "./pages/ClassMeeting";
import Community from "./pages/Community";
import ModalTest from "./pages/ModalTest";

function App() {
  return (
    <Routes>
    <Route path="/" element={ <Homepage />} />
    <Route path="/login" element={ <LoginPage />} />
    <Route path="/signup" element={ <SignupPage />} />
    <Route path="/community" element={ <Community />} />
    <Route path="/classmetting" element={ <ClassMeeting />} />
    <Route path="/modaltest" element={ <ModalTest />} />
    </Routes>
  );
}

export default App;
