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
import FavoriteRecipes from "./pages/FavoriteRecipes"; // Importação da nova página
import Support from "./pages/Support"; // Importação da nova página
import { FavoritesProvider } from './components/recipes/FavoritesContext'; // Importação do Provider

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <div className="container main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/indications" element={<Indications />} />
            <Route path="/favorites" element={<FavoriteRecipes />} /> {/* Nova rota */}
            <Route path="/support" element={<Support />} /> {/* Nova rota para Chama o Chef */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </FavoritesProvider>
  )
}

export default App;
