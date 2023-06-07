// App.js
import "./App.css";
import { Home } from "./pages/Home/Home";
import  About  from "./pages/About/About";
// import {Contact } from "./pages/Contact/Contact";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  return (
   
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
