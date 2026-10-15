/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DemoDisclaimerBanner } from './components/DemoDisclaimerBanner';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { TripsPage } from './pages/TripsPage';
import { TripDetailPage } from './pages/TripDetailPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { AboutPage } from './pages/AboutPage';
import { StoriesPage } from './pages/StoriesPage';
import { StoryDetailPage } from './pages/StoryDetailPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#F7F3E8] text-[#202522] selection:bg-[#F28C45] selection:text-white">
        <DemoDisclaimerBanner />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trips" element={<TripsPage />} />
            <Route path="/trips/:slug" element={<TripDetailPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/stories/:slug" element={<StoryDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
