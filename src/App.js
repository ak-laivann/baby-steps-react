import logo from './logo.svg';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/navbar';
import Catchphrase from './components/Catchphrase';
import Menu_Cards from './components/Menu';
import Footer from './components/Footer';

function App() {
  
  return(
    <div> 
      <Navbar />
      <Catchphrase /> 
      <Menu_Cards />
      <Footer />
    </div>
  )
  
}

export default App;
