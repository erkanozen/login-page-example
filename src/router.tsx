import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/login";
import Home from "./components/Home/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
