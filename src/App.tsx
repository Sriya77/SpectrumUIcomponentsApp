import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ComponentsLayout from './pages/ComponentsLayout';
import IntroductionPage from './pages/components/IntroductionPage';
import InstallationPage from './pages/components/InstallationPage';
import TailwindPage from './pages/components/TailwindPage';
import AnimatedChart from './UIcomponents/AnimatedChart/animatedPage';
import Alert from './UIcomponents/Alerts/alertpage';
import ButtonPage from './UIcomponents/Button/buttonPage';
import AnimatedTestimonials from './UIcomponents/AnimatedTestimonials/testimonialspage'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/components" element={<ComponentsLayout />}>
              <Route index element={<Navigate to="/components/introduction" replace />} />
              <Route path="introduction" element={<IntroductionPage />} />
              <Route path="installation" element={<InstallationPage />} />
              <Route path="tailwind" element={<TailwindPage />} />
              <Route path="AnimatedChart" element={<AnimatedChart />} />
              <Route path="Alert" element={<Alert />} />
              <Route path="buttons" element={<ButtonPage />} />
              <Route path="AnimatedTestimonials" element={<AnimatedTestimonials />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;