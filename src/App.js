import Header from './components/Header';
import Hero from './components/Hero';
import './index.css';
import bg from './img/bg.svg'; // убедитесь, что путь правильный

function App() {
  return (
    <div className="App relative h-screen font-montserrat overflow-hidden" style={{ backgroundImage: `url(${bg})` }}>
      <div className='absolute inset-0 bg-[rgba(19,52,87,.83)] z-0 blur' />
      <Hero />
    </div>
  );
}

export default App;
