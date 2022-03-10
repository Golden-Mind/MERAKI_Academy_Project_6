import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Login from './component/Login/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";


function App() {
  const [userInfo, setUserInfo] = useState({})

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
