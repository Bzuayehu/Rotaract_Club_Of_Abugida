import Header from '../components/Header';
import Projects from '../components/Projects';
import AboutUs from '../components/AboutUs';
import NoticeBoard from '../components/NoticeBoard';
import ContactUs from '../components/ContactUs';
// import Footer from '../components/Footer';
// import NavBar from '../components/NavBar';
import BODs from '../components/BODs';
import AwardsSection from '../components/Awards';
import Partners from '../components/Partners';
import FAQ from '../components/FAQ';


function Home() {
  return (
    <div className="app-container">
      <Header />
      <AboutUs />
      <NoticeBoard />
      <Projects />
      <BODs />
      <AwardsSection />
      <Partners />
      <FAQ />
      <ContactUs />
    </div>
  );
}

export default Home;