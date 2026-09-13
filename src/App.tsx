import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { SiteLayout } from './components/Layout';
import { HomePage } from './pages/Home';
import { ProductsPage } from './pages/Products';
import { AboutPage } from './pages/About';

export function AppContent() {
  return (
    <MotionConfig reducedMotion="user">
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SiteLayout>
    </MotionConfig>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
