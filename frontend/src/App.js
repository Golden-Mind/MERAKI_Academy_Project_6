import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./component/Hero/Hero";
import Home from "./component/home/home";
import Profile from "./component/profile/Profile";
import Register from "./component/Register/Register";
import Product from "./component/Product/Product";
import Navigation from "./component/Navigation/Navigation";


import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({});

  return (
    <div className="App">
      {/* <Navigation /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
