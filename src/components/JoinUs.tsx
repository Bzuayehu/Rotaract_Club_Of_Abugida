import "./JoinUs.css";

export default function JoinUs() {
  return (
    <section id="joinus" className="join-section">
      <div className="container">
        <div>
            <h2 className="title">Join Rotaract Club of Abugida</h2>
            <p className="description">
            Become part of a global movement of young leaders making an impact through service and leadership.
            </p>
        </div>
        <form className="join-form">
          <input type="text" placeholder="Full Name" className="input-field" required />
          <input type="email" placeholder="Email Address" className="input-field" required />
          <textarea placeholder="Why do you want to join?" className="textarea-field" required></textarea>
          <button type="submit" className="submit-button">Join Now</button>
        </form>
      </div>
    </section>
  );
}
