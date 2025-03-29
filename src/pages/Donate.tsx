// import React from 'react';
import './Donate.css';

export default function Donate() {
  return (
    <div className="donate">
      {/* Hero Section */}
      <div className="donate-hero">
        <h1>Donate Now</h1>
        <p>Your support helps us make a difference in the community.</p>
      </div>

      {/* Donation Methods Section */}
      <div className="donation-methods">
        <h2>Ways to Donate</h2>
        <div className="methods">
        <div className="method">
          <h3>Bank Transfer</h3>
          <p>
            <strong>Bank Name:</strong> Example Bank<br />
            <strong>Account Name:</strong> Rotaract Club of Abugida<br />
            <strong>Account Number:</strong> 1234567890<br />
            <strong>Branch Code:</strong> 1234
          </p>
        </div>
        <div className="method">
          <h3>Mobile Payment</h3>
          <p>
            <strong>Service:</strong> Example Mobile Money<br />
            <strong>Number:</strong> 0987654321<br />
            <strong>Name:</strong> Rotaract Club of Abugida
          </p>
        </div>
        <div className="method">
          <h3>Online Payment</h3>
          <p>
            <strong>Platform:</strong> Example Payment Gateway<br />
            <strong>Link:</strong> <a href="https://example.com/donate" target="_blank" rel="noopener noreferrer">Donate Online</a>
          </p>
        </div>
        </div>
      </div>

      {/* Donation Form Section (Optional) */}
      <div className="donation-form">
        <h2>Donation Form</h2>
        <form>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your full name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="amount">Donation Amount</label>
          <input type="number" id="amount" name="amount" placeholder="Enter amount" required />

          <label htmlFor="message">Message (Optional)</label>
          <textarea id="message" name="message" placeholder="Leave a message"></textarea>

          <button type="submit">Donate Now</button>
        </form>
      </div>

      {/* Thank You Section */}
      <div className="thank-you">
        <h2>Thank You for Your Support!</h2>
        <p>Your contribution helps us create a better community.</p>
      </div>
    </div>
  );
};
