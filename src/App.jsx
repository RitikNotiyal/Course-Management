// App.jsx
import { CourseProvider } from './contexts/CourseContext';
import Navigation from './layouts/Navigation';
import Footer from './layouts/Footer';
import CoursePage from './Pages/CoursePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <CourseProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navigation />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<CoursePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage/>} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </CourseProvider>
  );
}

export default App;
