import "./ContactUs.css";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation();

  return (
    <section id="contactus" className="contact-section">
      <div className="container">
        <div>
          <h2 className="title">{t("contact_title")}</h2>
          <p className="description">{t("contact_description")}</p>

          <div className="contact-info">
            <p><strong>{t("contact_email")}:</strong> info@rotaractabugida.org</p>
            <p><strong>{t("contact_phone")}:</strong> +251 911126955</p>
          </div>
        </div>
        
        <form className="contact-form">
          <input type="text" placeholder={t("contact_form_name")} className="input-field" required />
          <input type="email" placeholder={t("contact_form_email")} className="input-field" required />
          <textarea placeholder={t("contact_form_message")} className="textarea-field" required></textarea>
          <button type="submit" className="submit-button">{t("contact_form_submit")}</button>
        </form>
      </div>
    </section>
  );
}
