import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import Header from "./components/Header";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Course" element={<Courses/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
