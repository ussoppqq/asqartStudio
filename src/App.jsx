import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ScrollToTop from './components/utils/ScrollToTop';  

function AppContent() {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            {/* Placeholder route lain—tambahin kalau udah siap */}
            {/* <Route path="/about" element={<AboutPage />} /> */}
            {/* <Route path="/portfolio" element={<PortfolioPage />} /> */}
            {/* <Route path="/services" element={<ServicesPage />} /> */}
            {/* <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;