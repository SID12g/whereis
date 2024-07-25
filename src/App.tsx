import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./routes/main";
import Login from "./routes/login";
import Location from "./routes/location";
import Statics from "./routes/statics";
import Register from "./routes/register";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/location" element={<Location />} />
          <Route path="/statics" element={<Statics />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
