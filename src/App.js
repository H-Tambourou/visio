import './App.css';
import './responsive.css'


import Nav from './components/Nav';
import Galerie from './views/Galerie';
import Home from './views/Home';
import Contact from './views/Contact';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Galerie/>
      <Contact/>
    </div>
  );
}

export default App;
