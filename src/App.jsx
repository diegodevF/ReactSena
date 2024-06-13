import "./App.css";
import "@fontsource-variable/outfit";
import { Routes, Route } from "react-router-dom";
import Interface from "./routes/Interface";
import Login from "./routes/Login";
import SingIn from "./routes/SingIn";
import ForgotPass from "./routes/ForgotPass";
import Dashboard from "./routes/Dashboard";
import PageNotFound from "./routes/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Interface}></Route>
      <Route path="/Login" Component={Login}></Route>
      <Route path="/SingIn" Component={SingIn}></Route>
      <Route path="/ForgotPass" Component={ForgotPass}></Route>
      <Route path="/Dashboard" Component={Dashboard} ></Route>
      <Route path="/*" Component={PageNotFound}></Route>
    </Routes>
  );
}

export default App;
