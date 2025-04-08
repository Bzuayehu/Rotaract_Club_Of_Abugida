import './Abount.css'

export default function About() {
    return (
      <div className="about-container">
        {/* Hero Section */}
        <div className="header">
          <h1>About Rotaract Club of Abugida</h1>
          <p>Empowering young leaders to create positive change through community service, leadership, and innovation.</p>
        </div>
  
        {/* Our Mission Section */}
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to develop young professionals into proactive leaders by engaging in meaningful community service
            projects, fostering professional growth, and building strong networks of friendship and collaboration.
          </p>
        </section>
  
        {/* Our History Section */}
        <section className="history">
          <h2>Our History</h2>
          <p>
            Rotaract Club of Abugida was established in June 2002 and officially chartered on June 23, 2003. Since then, 
            we have been actively involved in numerous projects, impacting lives and strengthening our community. With 
            over 150 registered members and a dedicated group of 50-80 active participants, we continue to grow and expand 
            our reach.
          </p>
        </section>
  
        {/* Our Values Section */}
        <section className="values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Service:</strong> We believe in making a difference in our communities through impactful projects.</li>
            <li><strong>Leadership:</strong> We cultivate the next generation of leaders who drive meaningful change.</li>
            <li><strong>Fellowship:</strong> We foster lifelong friendships and professional networks.</li>
            <li><strong>Innovation:</strong> We embrace new ideas and creative solutions to address social challenges.</li>
          </ul>
        </section>
  
        {/* Our Impact Section */}
        <section className="impact">
          <h2>Our Impact</h2>
          <p>
            Over the years, our club has successfully executed numerous projects, including:
          </p>
          <ul>
            <li>🔹 Blood donation drives, saving hundreds of lives.</li>
            <li>🔹 Educational programs to support underprivileged students.</li>
            <li>🔹 Environmental sustainability initiatives, including tree planting and waste management.</li>
            <li>🔹 Professional development workshops to equip young leaders with essential skills.</li>
          </ul>
        </section>
  
        {/* Our Meetings Section */}
        <section className="meetings">
          <h2>Our Meetings</h2>
          <p>
            Our general assemblies are held every two weeks at the National Blood Bank (Red Cross) near Addis Ababa stadium 
            on Sundays at 9:00 LT.
          </p>
        </section>
  
        {/* How to Join Section */}
        <section className="join">
          <h2>How to Join</h2>
          <p>
            If you're passionate about making a difference, we invite you to join us! Whether you're interested in community service, 
            leadership development, or networking opportunities, the Rotaract Club of Abugida provides a platform to grow and contribute.
          </p>
          <p>
            <strong><a href="page.html#joinus">Join us and be part of the change!</a></strong>
          </p>
        </section>
  
        {/* Testimonials Section */}
        <section className="testimonials">
          <h2>What Our Members Say</h2>
          <blockquote>
            "Being part of Rotaract Club of Abugida has transformed my leadership skills and given me the opportunity to serve my 
            community in ways I never imagined." - <strong>Member A</strong>
          </blockquote>
          <blockquote>
            "I have made lifelong friends and connections that have helped me grow personally and professionally." - <strong>Member B</strong>
          </blockquote>
        </section>
  
        {/* Contact Us Section */}
        <section className="contact">
          <h2>Get in Touch</h2>
          <p>
            Have questions? Want to collaborate or join us? Reach out!
          </p>
          <p><strong>Email:</strong> info@rotaractabugida.org</p>
          <p><strong>Phone:</strong> +251 911126955</p>
        </section>
      </div>
    );
  }
  