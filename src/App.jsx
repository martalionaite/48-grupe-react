// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div>CONTENT 1</div>
      <div>CONTENT 2</div>
      <div>CONTENT 3</div>
      <Footer />
    </div>
  );
}

export default App;