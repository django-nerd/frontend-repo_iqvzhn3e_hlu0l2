import NavBar from './components/NavBar';
import Hero from './components/Hero';
import MainSections from './components/MainSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased scroll-smooth">
      <NavBar />
      <main className="pt-16">
        <Hero />
        <MainSections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
