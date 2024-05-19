import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Indications from "./pages/Indications";

function App() {
  
  return (
    <Router>
      <Navbar />
        <div className="container main">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/recipes" element={<Recipes />}/>
            <Route path="/indications" element={<Indications />}/>
          </Routes>
        </div>
      <Footer />
    </Router>
  )
}

export default App;
