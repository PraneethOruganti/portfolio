import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="main-container">
        <Hero></Hero>
        <About></About>
      </div>
    </>
  );
}

export default App;
