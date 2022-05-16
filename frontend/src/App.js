import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Update from './components/Update';

function App() {
  return (
   <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Update/:id" element={<Update />} />
      </Routes>
     </>
  );
}

export default App;
