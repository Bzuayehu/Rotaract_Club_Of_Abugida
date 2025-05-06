// Donate.jsx
import { useState, FormEvent, ChangeEvent } from "react";
import { FiCopy, FiPhone, FiUpload, FiCheckCircle } from "react-icons/fi";
import axios, { AxiosError} from "axios";
import "./Donate.css";

interface FormData {
  name: string;
  email: string;
  amount: string;
  message: string;
  screenshot: File | null;
}

interface ApiResponse {
  result: string;
  message?: string;
}

export default function Donate() {
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    amount: "",
    message: "",
    screenshot: null,
  });

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (!formData.screenshot) {
        throw new Error("Please upload payment proof");
      }

      const reader = new FileReader();
      
      reader.onloadend = async () => {
        try {
          if (typeof reader.result !== 'string') {
            throw new Error('Failed to read file as data URL');
          }
          const base64Data = reader.result.split(",")[1];

          const payload = {
            name: formData.name,
            email: formData.email,
            amount: formData.amount,
            message: formData.message,
            screenshot: base64Data,
          };

          const scriptUrl = "YOUR_GOOGLE_APPS_SCRIPT_URL";

          const response = await axios.post<ApiResponse>(scriptUrl, payload, {
            headers: {
              "Content-Type": "text/plain",
            },
            onUploadProgress: (progressEvent) => {
              const progress = Math.round(
                (progressEvent.loaded / ((progressEvent.total || 1))) * 100
              );
              setUploadProgress(progress);
            },
          });

          if (response.data.result === "success") {
            setMessage("Donation recorded successfully!");
            setFormData({
              name: "",
              email: "",
              amount: "",
              message: "",
              screenshot: null,
            });
          }
        } catch (error) {
          const axiosError = error as AxiosError<ApiResponse>;
          setMessage(axiosError.response?.data?.message || "Submission failed");
          console.error("Submission error:", error);
        } finally {
          setLoading(false);
          setUploadProgress(0);
        }
      };

      reader.onerror = () => {
        throw new Error("Failed to read file");
      };

      reader.readAsDataURL(formData.screenshot);

    } catch (error) {
      const err = error as Error;
      setMessage(err.message);
      console.error("Error:", error);
      setLoading(false);
      setUploadProgress(0);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        screenshot: e.target.files[0],
      });
    }
  };

  return (
    <div className="donate-container">
      {/* Hero Section */}
      <section className="donate-hero">
        <h1 className="hero-title">Empower Positive Change</h1>
        <p className="hero-subtitle">
          Your support fuels community transformation
        </p>
      </section>

      {/* Donation Methods */}
      <section className="donation-methods">
        <h2 className="section-title">Secure Donation Channels</h2><div className="methods-grid">
          {/* Bank Transfer Card */}
          <div className="method-card bank-card">
            <div className="method-header">
              <div className="method-icon">🏦</div>
              <h3>Bank Transfer</h3>
            </div>

            <div className="method-body">
              <div className="bank-detail">
                <div className="bank-info">
                  <span className="bank-name">Commercial Bank of Ethiopia</span>
                  <div className="account-detail">
                    <span className="account-number">1000649057889</span>
                    <button
                      className="copy-button"
                      onClick={() => copyToClipboard("1000649057889")}
                    >
                      <FiCopy /> Copy
                    </button>
                  </div>
                </div>

                <div className="bank-info">
                  <span className="bank-name">Bank of Abyssinia</span>
                  <div className="account-detail">
                    <span className="account-number">197804645</span>
                    <button
                      className="copy-button"
                      onClick={() => copyToClipboard("197804645")}
                    >
                      <FiCopy /> Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Telebirr Card */}
          <div className="method-card telebirr-card">
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
          <div className="method-card online-card">
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

      {uploadProgress > 0 && (
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${uploadProgress}%` }}
          >
            {uploadProgress}%
          </div>
        </div>
      )}

      {message && (
        <div
          className={`status-message ${
            message.includes("Error") ? "error" : "success"
          }`}
        >
          {message}
        </div>
      )}
      {/* Donation Form */}
      <section className="donation-form-section">
        <h2 className="section-title">Donation Details</h2><form className="donation-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                required
                className="vibrant-input"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                required
                className="vibrant-input"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label htmlFor="amount">Amount (ETB)</label>
              <input
                type="number"
                id="amount"
                required
                className="vibrant-input"
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
              />
            </div>

            <div className="input-group">
              <label htmlFor="screenshot" className="file-upload-label">
                <FiUpload className="upload-icon" />
                <span>Upload Payment Proof</span>
                <input
                 type="file"
                 id="screenshot"
                 accept="image/*"
                 className="file-input"
                 onChange={handleFileChange}
                />
              </label>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="message">Message (Optional)</label>
            <textarea
              id="message"
              className="vibrant-textarea"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </div>

          <button type="submit" className="submit-button1" disabled={loading}>
            {loading ? "Submitting..." : "Confirm Donation"}
          </button>
        </form>
      </section>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast">
          <FiCheckCircle /> Copied to clipboard!
        </div>
      )}

      {/* Appreciation Section */}
      <section className="appreciation-section">
        <h2 className="appreciation-title">
          Thank You for Making a Difference!
        </h2>
        <p className="appreciation-text">
          Your generosity helps us create sustainable change in our community.
        </p>
      </section>
    </div>
  );
}