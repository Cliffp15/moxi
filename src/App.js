import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Fun from "./Component/Fun";
import Health from "./Component/Health";
import Career from "./Component/Career";
import Finance from "./Component/Finance";
import SignUp from "./Component/Auth/Sign-up/SignUp";
import SignIn from "./Component/Auth/Sign-in/SignIn";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Fun" element={<Fun />}></Route>
        <Route path="/Health" element={<Health />}></Route>
        <Route path="/Career" element={<Career />}></Route>
        <Route path="/Finance" element={<Finance />}></Route>
        <Route path="/Sign-Up" element={<SignUp />}></Route>
        <Route path="/Sign-In" element={<SignIn />}></Route>
      </Routes>
    </div>
  );
}

export default App;
