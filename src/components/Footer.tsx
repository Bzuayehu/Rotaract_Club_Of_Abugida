import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <p className="footer-text">&copy; {new Date().getFullYear()} Rotaract Club of Abugida. All Rights Reserved.</p>
        {/* <div className="social-links">
          <a href="#" className="social-icon">Facebook</a>
          <a href="#" className="social-icon">Twitter</a>
          <a href="#" className="social-icon">Instagram</a>
        </div> */}
      </div>
    </footer>
  );
}