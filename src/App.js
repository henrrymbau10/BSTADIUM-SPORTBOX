
import './App.css';
import Application from './Components/CarouselHome/CarouselItem';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Powerby from './Components/Powerby/Powerby';
import Slider from './Components/Slider/Slider';
import Ventajas from './Components/Ventajas/Ventajas';

function App() {
  return (
    <div className="App">
      <Application/>
      <Main/>
      <Ventajas/>
      <Slider/>
      <Footer/>
      <Powerby/>
    </div>
  );
}

export default App;
