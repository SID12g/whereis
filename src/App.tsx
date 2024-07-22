import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./routes/main";
import Login from "./routes/login";
import Location from "./routes/location";
import Statics from "./routes/statics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/location" element={<Location />} />
        <Route path="/statics" element={<Statics />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
