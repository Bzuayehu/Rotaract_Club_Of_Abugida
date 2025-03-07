import Header from './components/Header';
import Projects from './components/Projects';
import './App.css'; // Import the CSS file
import AboutUs from './components/AboutUs';
import NoticeBoard from './components/NoticeBoard';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Header />
      <AboutUs />
      <NoticeBoard />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
