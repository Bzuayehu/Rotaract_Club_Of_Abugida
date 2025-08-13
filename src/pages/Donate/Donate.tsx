import { useState, FormEvent, ChangeEvent } from "react";
import { FiCopy, FiPhone, FiUpload, FiCheckCircle } from "react-icons/fi";
// import axios, { AxiosError } from "axios";
import "./Donate.css";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS
import React from "react";
import emailjs from '@emailjs/browser';
import imageCompression from 'browser-image-compression';

interface FormData {
  name: string;
  email: string;
  amount: string;
  message: string;
  screenshot: File | null;
}

// interface ApiResponse {
//   result: string;
//   message?: string;
// }

export default function Donate() {
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<'success' | 'error'>("success");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    amount: "",
    message: "",
    screenshot: null,
  });

  // Initialize AOS
  React.useEffect(() => {
    AOS.init();
  }, []);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setMessage('Copied to clipboard!');
      setToastType('success');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      setMessage('Failed to copy');
      setToastType('error');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  // Type guard for File or Blob
  function isFileOrBlob(file: unknown): file is File | Blob {
    return (
      typeof file === 'object' &&
      file !== null &&
      ('size' in file)
    );
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Debug log
    console.log('Submitting:', formData);

    const screenshot = formData.screenshot;
    const isValidScreenshot =
      isFileOrBlob(screenshot) && screenshot.size > 0;

    if (!formData.name.trim() || !formData.email.trim() || !formData.amount.trim() || !isValidScreenshot) {
      setMessage("Please fill in all required fields and upload payment proof.");
      setToastType("error");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        setMessage("");
      }, 3500);
      setLoading(false);
      return;
    }

    try {
      // Only proceed if screenshot is not null
      if (!screenshot) {
        setMessage("Please upload a valid payment proof image.");
        setToastType("error");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3500);
        setLoading(false);
        return;
      }
      // Read the file as base64
      const reader = new FileReader();
      reader.onloadend = async () => {
        try {
          if (typeof reader.result !== "string") {
            throw new Error("Failed to read file as data URL");
          }
          const base64Data = reader.result.split(",")[1];

          // Debug: Log base64 length and a sample
          console.log('Base64 length:', base64Data.length);
          console.log('Base64 sample:', base64Data.substring(0, 50));

          // Check base64 size (EmailJS limit is 50KB, base64 is ~33% larger)
          const base64Bytes = Math.ceil((base64Data.length * 3) / 4); // base64 to bytes
          if (base64Bytes > 50000) {
            setMessage("Image is too large after encoding. Please upload a much smaller image (ideally under 20KB before upload).");
            setToastType("error");
            setShowToast(true);
            setLoading(false);
            setTimeout(() => setShowToast(false), 3500);
            return;
          }

          // EmailJS integration
          // Add the base64 string as a plain text variable for debugging
          await emailjs.send(
            'service_o5y7aoa',
            'template_rc5b3lq',
            {
              name: formData.name,
              email: formData.email,
              amount: formData.amount,
              message: formData.message,
              screenshot: base64Data, // Attach as base64 string
              screenshot_debug: base64Data, // For debugging in template
            },
            'IVWKu8_h_9vWeSTkB'
          );
          setMessage("Thank you for your donation! We have received your details.");
          setToastType("success");
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3500);
          setFormData({ name: "", email: "", amount: "", message: "", screenshot: null });
        } catch (error: any) {
          // Handle EmailJS Method Not Allowed error
          if (error?.status === 405 || error?.message?.includes('Method Not Allowed')) {
            setMessage("Submission failed: EmailJS endpoint is not accepting this request. Please check your EmailJS service/template configuration, public key, and template variables (e.g., 'screenshot').");
          } else {
            setMessage("Failed to send donation details. Please try again later.");
          }
          setToastType("error");
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3500);
        } finally {
          setLoading(false);
        }
      };
      reader.onerror = () => {
        setMessage("Failed to read file");
        setLoading(false);
      };
      reader.readAsDataURL(screenshot); // screenshot is guaranteed not null here
    } catch (error) {
      setMessage("Failed to send donation details. Please try again later.");
      setToastType("error");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3500);
      setLoading(false);
    }
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const options = {
        maxSizeMB: 0.015, // 15KB for much higher compression
        maxWidthOrHeight: 150, // much smaller dimension for higher compression
        useWebWorker: true
      };
      try {
        const compressedFile = await imageCompression(file, options);
        if (compressedFile.size > 30 * 1024) {
          setMessage('Image is too large even after compression. Please upload an image smaller than 30KB.');
          setToastType('error');
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3500);
          return;
        }
        setFormData({ ...formData, screenshot: compressedFile });
        setMessage('Payment proof uploaded: ' + compressedFile.name);
        setToastType('success');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
        console.log('File set in state:', compressedFile);
      } catch (error) {
        setMessage('Failed to compress image. Please try another image.');
        setToastType('error');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3500);
      }
    }
  };

  // Show toast for all messages
  React.useEffect(() => {
    if (message) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
        setMessage("");
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="donate-container">
      {/* Hero Section */}
      <section className="donate-hero1" data-aos="fade-up">
        <div className="hero-overlay1">
          <div className="hero-content1" data-aos="fade-down">
            <h1 className="hero-title1" data-aos="fade-right">Empower Positive Change</h1>
            <p className="hero-subtitle2" data-aos="fade-up">
              Your support fuels community transformation
            </p>
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="donation-methods" data-aos="fade-up">
        <h2 className="section-title" data-aos="fade-up">Secure Donation Channels</h2>
        <div className="methods-grid">
          {/* Bank Transfer Card */}
          <div className="method-card bank-card" data-aos="zoom-in">
            <div className="method-header">
              <div className="method-icon">🏦</div>
              <h3>Bank Transfer</h3>
            </div>
            <div className="method-body">
              <div className="bank-detail">
                <div className="bank-info">
                  <span className="bank-name">Commercial Bank of Ethiopia</span>
                  <div className="account-detail">
                    <span className="account-number">1000705732508</span>
                    <button
                      className="copy-button"
                      onClick={() => copyToClipboard("1000705732508")}
                    >
                      <FiCopy /> Copy
                    </button>
                  </div>
                </div>
                <div className="bank-info">
                  <span className="bank-name">Bank of Abyssinia</span>
                  <div className="account-detail">
                    <span className="account-number">229725629</span>
                    <button
                      className="copy-button"
                      onClick={() => copyToClipboard("229725629")}
                    >
                      <FiCopy /> Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Telebirr Card */}
          <div className="method-card telebirr-card" data-aos="zoom-in">
            <div className="method-header">
              <div className="method-icon">📱</div>
              <h3>Telebirr</h3>
            </div>
            <div className="method-body">
              <div className="telebirr-detail">
                <div className="contact-info">
                  <span className="phone-number">+251 91 291 1344</span>
                  <div className="action-buttons">
                    <button
                      className="copy-button"
                      onClick={() => copyToClipboard("+251912911344")}
                    >
                      <FiCopy /> Copy
                    </button>
                    <a href="tel:+251912911344" className="call-button">
                      <FiPhone /> Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Online Payment Card */}
          <div className="method-card online-card" data-aos="zoom-in">
            <div className="method-header">
              <div className="method-icon">💳</div>
              <h3>Online Payment</h3>
            </div>
            <div className="method-body">
              <div className="coming-soon">
                <FiCheckCircle className="coming-icon" />
                <p>Secure online portal coming soon!</p>
                <button className="notify-button">Notify Me When Live</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="donation-form-section" data-aos="fade-up">
        <h2 className="section-title" data-aos="fade-up">Donation Details</h2>
        <form className="donation-form" onSubmit={handleSubmit}>
          <div className="form-row" data-aos="fade-up">
            <div className="input-group">
              <label htmlFor="name" data-aos="fade-right">Full Name*</label>
              <input
                type="text"
                id="name"
                required
                className="vibrant-input"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="input-group" data-aos="fade-up">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                required
                className="vibrant-input"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
          <div className="form-row" data-aos="fade-right">
            <div className="input-group">
              <label htmlFor="amount">Amount (ETB)*</label>
              <input
                type="number"
                id="amount"
                required
                className="vibrant-input"
                value={formData.amount}
                onChange={e => setFormData({ ...formData, amount: e.target.value })}
                min="1"
              />
            </div>
            <div className="input-group" data-aos="fade-up">
              <label htmlFor="screenshot" className="file-upload-label">
                <FiUpload className="upload-icon" />
                <span>Upload Payment Proof*</span>
                <input
                  type="file"
                  id="screenshot"
                  accept="image/*"
                  className="file-input"
                  required
                  onChange={handleFileChange}
                />
              </label>
              {formData.screenshot && formData.screenshot.name && (
                <div className="file-name">Selected: {formData.screenshot.name}</div>
              )}
            </div>
          </div>
          <div className="input-group" data-aos="fade-up">
            <label htmlFor="message">Message (Optional)</label>
            <textarea
              id="message"
              className="vibrant-textarea"
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          <button
            type="submit"
            className="submit-button1"
            disabled={loading}
            data-aos="fade-up"
          >
            {loading ? "Submitting..." : "Confirm Donation"}
          </button>
        </form>
      </section>

      {showToast && (
        <div className={`toast-popup ${toastType}`}> 
          {toastType === 'success' ? (
            <span role="img" aria-label="success">✅</span>
          ) : (
            <span role="img" aria-label="error">❌</span>
          )}
          {message}
        </div>
      )}

      <section className="appreciation-section" data-aos="fade-up">
        <h2 className="appreciation-title" data-aos="fade-right">
          Thank You for Making a Difference!
        </h2>
        <p className="appreciation-text" data-aos="fade-left">
          Your generosity helps us create sustainable change in our community.
        </p>
      </section>
    </div>
  );
}
