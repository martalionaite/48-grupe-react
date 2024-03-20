import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Footer } from './components/footer/Footer';

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