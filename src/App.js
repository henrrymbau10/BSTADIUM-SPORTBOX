
import './App.css';
import Carousel from './Components/Carousel/Carousel';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Powerby from './Components/Powerby/Powerby';
import Ventajas from './Components/Ventajas/Ventajas';

function App() {
  return (
    <div className="App">
      <Home/>
      <Main/>
      <Ventajas/>
      <Carousel/>
      <Footer/>
      <Powerby/>
    </div>
  );
}

export default App;
