import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Recipes from './pages/recipes/Recipes'
import Occasions from './pages/occasions/Occasions'
import Indications from './pages/indications/Indications'
import Support from './pages/support/Support'
import Navbar from './components/layout/Navbar'


function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/occasions' element={<Occasions />}/>
        <Route path='/indications' element={<Indications />}/>
        <Route path='/support' element={<Support />}/>
      </Routes>
    </Router>
  );

}

export default App;
