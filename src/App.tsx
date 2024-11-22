import About from './components/About';
import AchievementNotification from './components/AchievementNotification';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { AchievementProvider } from './context/AchievementContext';

function App() {
  return (
    <AchievementProvider>
      <div className="bg-gray-900 text-white">
        <Navbar />
        <ProgressBar />
        <AchievementNotification />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </AchievementProvider>
    
  );
}

export default App;