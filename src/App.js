import './App.css';
import Navbar from './components/Navbar';
import PharmacySearchBar from './components/PharmacySearchBar';
import LocationBar from './components/LocationBar';
import AnnouncementBar from './components/AnnouncementBar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Services from './components/Services';
import ShopByCategory from './components/ShopByCategory';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <AnnouncementBar />
      <PharmacySearchBar />
      <Hero />
      <LocationBar />
      <ProductGrid />
      <ShopByCategory />
      <Services />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
