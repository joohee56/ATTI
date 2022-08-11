import { Route, Routes } from "react-router-dom";

//import AddCommentIcon from "@mui/icons-material/AddComment";
import Homepage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import ClassMeeting from "./pages/ClassMeeting";
import Community from "./pages/Community";
import WelcomePage from "./pages/Welcome";
import ModalTest from "./pages/ModalTest";
import OAuth2RedirectHandler from "./components/account/OAuth2RedirectHandler";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Homepage />} />
      <Route path="/login" element={ <LoginPage />} />
      <Route path="/signup" element={ <SignupPage />} />
      <Route path="/community/:categoryName" element={<Community/>}/>
      <Route path="/classmeeting" element={ <ClassMeeting />} />
      <Route path="/welcome" element={ <WelcomePage />} />
      <Route path="/modaltest" element={ <ModalTest />} />
      <Route path="/oauth/callback/kakao" element={<OAuth2RedirectHandler/>}/>
    </Routes>
  );
}

export default App;
