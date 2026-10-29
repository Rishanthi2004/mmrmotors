/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import UsedCars from './components/UsedCars';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import ScrollProgress from './components/ScrollProgress';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (service?: string) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-red-600 selection:text-white relative">
      {/* Scroll Progress Bar at the top of the viewport */}
      <ScrollProgress />

      {/* 1. Header and Navigation */}
      <Header />

      {/* Main Content Sections (Strict SRS Order: Hero -> About -> Services -> Used Cars -> Why Choose Us -> Contact) */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* 3. About the Company */}
        <About />

        {/* 4. Our Services */}
        <Services onSelectService={handleSelectService} />

        {/* 5. Used Car Sales */}
        <UsedCars onOpenEnquiry={handleOpenEnquiry} />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. Contact Us */}
        <Contact initialService={selectedService} />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Interactive Floating Actions when scrolled */}
      <FloatingActions onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Interactive Customer Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
}
