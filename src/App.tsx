import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import CreateChat from "./pages/CreateChat";
import JoinChat from "./pages/JoinChat";
import Register from "./pages/Register";
import SuccessfulRegistration from "./pages/SuccessfulRegistration";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Index}></Route>
        <Route path="/create-chat" Component={CreateChat}></Route>
        <Route path="/join-chat" Component={JoinChat}></Route>
        <Route path="/register" Component={Register}></Route>
        <Route path="/register/successful-registration" Component={SuccessfulRegistration}></Route>
        <Route path="/login" Component={Login}></Route>
      </Routes>
    </div>
  );
}

export default App;
