import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HistoryCarousel from './components/HistoryCarousel';
import MetricsSection from './components/MetricsSection';
import EventDetails from './components/EventDetails';
import Footer from './components/Footer';
import RSVPModal from './components/RSVPModal';
import VideoModal from './components/VideoModal';

function App() {
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openRSVP = () => setIsRSVPOpen(true);
  const closeRSVP = () => setIsRSVPOpen(false);
  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <div className="min-h-screen bg-rsiDark-950 text-gray-100 flex flex-col font-sans select-none">
      {/* Header / Navbar */}
      <Navbar onOpenRSVP={openRSVP} />

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* Section 1: Hero Section */}
        <HeroSection onOpenRSVP={openRSVP} />

        {/* Section 2: Carousel Retrospective */}
        <HistoryCarousel onOpenVideo={openVideo} />

        {/* Section 3: Stat Metrics */}
        <MetricsSection />

        {/* Section 4: Event Details */}
        <EventDetails onOpenRSVP={openRSVP} />

      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <RSVPModal isOpen={isRSVPOpen} onClose={closeRSVP} />
      <VideoModal isOpen={isVideoOpen} onClose={closeVideo} />
    </div>
  );
}

export default App;
