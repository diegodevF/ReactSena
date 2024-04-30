import "./App.css";
import "@fontsource-variable/outfit";
import { Routes, Route } from "react-router-dom";
import Interface from "./routes/Interface";
import Login from "./routes/Login";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Interface}></Route>
      <Route path="/Login" Component={Login}></Route>
    </Routes>
  );
}

export default App;
