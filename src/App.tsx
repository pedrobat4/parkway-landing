import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Differentials from './components/Differentials';
import Gallery from './components/Gallery';
import Specs from './components/Specs';
import ExternalTour from './components/ExternalTour';
import ConstructionStatus from './components/ConstructionStatus';
import Location from './components/Location';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="bg-graphite-700 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Differentials />
        <Gallery />
        <Specs />
        <ExternalTour />
        <ConstructionStatus />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
