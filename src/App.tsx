import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { SiteLayout } from './components/Layout';
import { HomePage } from './pages/Home';
import { ProductsPage } from './pages/Products';
import { AboutPage } from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <SiteLayout>
          <Routes>
            {/* Main pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/products/" element={<ProductsPage />} />
            <Route path="/about/" element={<AboutPage />} />

            {/* Legacy URL redirects */}
            <Route
              path="/products"
              element={<Navigate to="/products/" replace />}
            />
            <Route
              path="/about-us"
              element={<Navigate to="/about/" replace />}
            />
            <Route
              path="/about-us/"
              element={<Navigate to="/about/" replace />}
            />

            {/* Temporary placeholders for the new architecture */}
            <Route
              path="/plywood/"
              element={<Navigate to="/products/" replace />}
            />
            <Route
              path="/laminates/"
              element={<Navigate to="/products/" replace />}
            />
            <Route
              path="/wpc-louvers/"
              element={<Navigate to="/products/" replace />}
            />
            <Route
              path="/doors/"
              element={<Navigate to="/products/" replace />}
            />
            <Route
              path="/interior-accessories/"
              element={<Navigate to="/products/" replace />}
            />
            <Route
              path="/brands/"
              element={<Navigate to="/products/" replace />}
            />
            <Route
              path="/brands/centuryply/"
              element={<Navigate to="/products/" replace />}
            />
            <Route
              path="/projects/"
              element={<Navigate to="/" replace />}
            />
            <Route
              path="/guides/"
              element={<Navigate to="/" replace />}
            />
            <Route
              path="/contact/"
              element={<Navigate to="/" replace />}
            />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </SiteLayout>
      </MotionConfig>
    </BrowserRouter>
  );
}
