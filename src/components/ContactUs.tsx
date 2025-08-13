import "./ContactUs.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default function JoinUs() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="joinus" className="contact-section" data-aos="fade-up">
      <a id="joinus" />
      <div className="container">
        <div>
          <h2 className="title" data-aos="fade-right">{t("join_title")}</h2>
          <p className="description" data-aos="fade-left" data-aos-delay="100">
            {t("join_description")}
          </p>

          <div className="contact-info-inline">
            <p data-aos="fade-up" data-aos-delay="200">
              <strong>{t("contact_email")}:</strong> abugidarotaract@gmail.com
            </p>
            <p data-aos="fade-up" data-aos-delay="300">
              <strong>{t("contact_phone")}:</strong> +251 94 122 9771
            </p>
          </div>
        </div>
        
        <form className="contact-form_inline" data-aos="zoom-in-up" data-aos-delay="400">
          <input 
            type="text" 
            placeholder={t("join_form_name")} 
            className="input-field" 
            required 
            data-aos="fade-up" data-aos-delay="500"
          />
          <input 
            type="tel" 
            placeholder={t("join_form_phone")} 
            className="input-field" 
            required 
            data-aos="fade-up" data-aos-delay="600"
          />
          <input 
            type="email" 
            placeholder={t("join_form_email")} 
            className="input-field" 
            required 
            data-aos="fade-up" data-aos-delay="700"
          />
          <button 
            type="submit" 
            className="submit-button"
            data-aos="fade-up" 
            data-aos-delay="800"
          >
            {t("join_button")}
          </button>
        </form>
      </div>
    </section>
  );
}