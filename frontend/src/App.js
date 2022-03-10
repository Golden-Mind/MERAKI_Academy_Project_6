import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Login from './component/Login/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./component/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
