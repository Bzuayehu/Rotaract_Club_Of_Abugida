import "./ContactUs.css";

export default function ContactUs() {
  return (
    <section id="contactus" className="contact-section">
      <div className="container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="input-field" required />
          <input type="email" placeholder="Your Email" className="input-field" required />
          <textarea placeholder="Your Message" className="textarea-field" required></textarea>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
        <div>
          <h2 className="title">Get in Touch</h2>
          <p className="description">
            Have questions or want to collaborate? Reach out to us!
          </p>
          <div className="contact-info">
            <p><strong>Email:</strong> info@rotaractabugida.org</p>
            <p><strong>Phone:</strong> +251 911126955</p>
          </div>
        </div>
      </div>
    </section>
  );
}
