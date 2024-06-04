import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Indications from "./pages/Indications";
import FavoriteRecipes from "./pages/FavoriteRecipes";
import Support from "./pages/Support";
import { FavoritesProvider } from './components/recipes/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <div className="container main">
          <Routes>
            <Route path="/embarqueDigital20241" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/indications" element={<Indications />} />
            <Route path="/favorites" element={<FavoriteRecipes />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </FavoritesProvider>
  )
}

export default App;