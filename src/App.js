import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/Login';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Component/Register';
import ForgotPassword from './Component/ForgotPassword';
import Verify from './Component/Verify';
import LearningbyLevel from './Component/LearningbyLevel';
import DetailsNews from './Component/DetailsNews';
import About from './Component/About';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Login />}></Route>
        <Route path='/Home/' exact element={<Home />}></Route>
        <Route path='/Register' exact element={<Register />}></Route>
        <Route path='/ForgotPassword' exact element={<ForgotPassword />}></Route>
        <Route path='/Verify' exact element={<Verify />}></Route>
        <Route path='/LearningbyLevel' exact element={<LearningbyLevel/>}></Route>
        <Route path='/DetailsNews/:id' exact element = {<DetailsNews/>}></Route>
        <Route path='/About' exact element = {<About/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
