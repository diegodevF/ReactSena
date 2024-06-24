import "./App.css";
import "@fontsource-variable/outfit";
import { Routes, Route } from "react-router-dom";
import Interface from "./routes/Interface";
import Login from "./routes/Login";
import SingIn from "./routes/SingIn";
import ForgotPass from "./routes/ForgotPass";
import Dashboard from "./routes/Dashboard";
import GoalPanel from "./routes/GoalPanel"
import PageNotFound from "./routes/PageNotFound";
import AddTransaction from "./routes/AddTransaction";
import GenerateReport from "./routes/GenerateReport";
import ProfilePanel from "./routes/ProfilePanel";


function App() {
  return (
    <Routes>
      <Route path="/" Component={Interface}></Route>
      <Route path="/Login" Component={Login}></Route>
      <Route path="/SingIn" Component={SingIn}></Route>
      <Route path="/ForgotPass" Component={ForgotPass}></Route>
      <Route path="/Dashboard" Component={Dashboard} ></Route>
      <Route path="/GoalPanel" Component={GoalPanel}></Route>
      <Route path="/AddTransaction" Component={AddTransaction}></Route>
      <Route path="/GenerateReport" Component={GenerateReport}></Route>
      <Route path="/ProfilePanel" Component={ProfilePanel}></Route>
      <Route path="/*" Component={PageNotFound}></Route>
    </Routes>
  );
}

export default App;
