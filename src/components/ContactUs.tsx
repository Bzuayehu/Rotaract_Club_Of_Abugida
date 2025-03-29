import "./ContactUs.css";
import { useTranslation } from "react-i18next";

export default function JoinUs() {
  const { t } = useTranslation();

  return (
    <section id="joinus" className="contact-section">
      <div className="container">
        <div>
          <h2 className="title">{t("join_title")}</h2>
          <p className="description">{t("join_description")}</p>

          <div className="contact-info-inline">
            <p><strong>{t("contact_email")}:</strong> info@rotaractabugida.org</p>
            <p><strong>{t("contact_phone")}:</strong> +251 911126955</p>
          </div>
        </div>
        
        <form className="contact-form_inline">
          <input 
            type="text" 
            placeholder={t("join_form_name")} 
            className="input-field" 
            required 
          />
          <input 
            type="tel"  // Changed to tel input
            placeholder={t("join_form_phone")} 
            className="input-field" 
            required 
          />
          <input 
            type="email"  // Replaced textarea with email input
            placeholder={t("join_form_email")} 
            className="input-field" 
            required 
          />
          <button type="submit" className="submit-button">
            {t("join_button")}
          </button>
        </form>
      </div>
    </section>
  );
}