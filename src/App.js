import './App.css';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import JumboSection from './Components/Jumbo-section/JumboSection';
import RestroPocket from './Components/Restro_in_Pocket/RestroPocket';

function App() {
  return (
    <div className="App">
      <JumboSection/>
      <Features/>
      <RestroPocket/>
      <Footer/>
      
    </div>
  );
}

export default App;
