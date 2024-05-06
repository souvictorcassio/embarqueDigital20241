import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Recipes from './pages/recipes/Recipes'
import Occasions from './pages/occasions/Occasions'
import Indications from './pages/indications/Indications'
import Support from './pages/support/Support'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'


function App() {
  
  return (
    <Router>
      <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/occasions' element={<Occasions />}/>
            <Route path='/indications' element={<Indications />}/>
            <Route path='/support' element={<Support />}/>
          </Routes>
        </Container>
        <Footer/>
    </Router>
  );

}

export default App;
