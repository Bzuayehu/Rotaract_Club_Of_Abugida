import Logo from '../assets/logo.jpg';
import './NavBar.css'

export default function NavBar() {
    return (
      <div className="navbar-container">
      <div className="navbar-main">
        <div className="navbar-logo">
          <a href="/"><img src={Logo} alt="logo" width={210} /></a>
        </div>

        <ul className="navbar-links">
          <li><a href="#" className="font-semibold">Home</a></li>
          <li><a href="#aboutus" className="font-semibold">About Us</a></li>
          <li><a href="#services" className="font-semibold">Our Services</a></li>
          <li><a href="#joinus" className="font-semibold">Join Us</a></li>
          <li><a href="#contactus" className="font-semibold">Contact Us</a></li>
        </ul>

        <div>
          {/* <p>Become Tutor</p> */}
        </div>
      </div>
    </div>
  );
}