import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Login from './component/Login/Login'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./component/home/home";
import Profile from "./component/profile/Profile";

import {useState} from "react";



function App() {
  const [userInfo, setUserInfo] = useState({})

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
