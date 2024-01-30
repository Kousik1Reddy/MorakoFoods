import './App.css';
import Home from '../src/components/home';
import {Route,Routes, BrowserRouter as Router} from "react-router-dom"
import Signup from './components/signup';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/signup" element={<Signup/>}> </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
