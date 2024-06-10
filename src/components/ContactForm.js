import React, { useState } from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [activeTab, setActiveTab] = useState("problem");
  const [formKey, setFormKey] = useState(0);

  const handleTabClick = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
      setFormKey((prevKey) => prevKey + 1);
    }
  };

  return (
    <div className="contact-form">
      <div className="title">Bize Ulaşın</div>
      <div className="tabs">
        <div
          className={`tab ${activeTab === "problem" ? "active" : ""}`}
          onClick={() => handleTabClick("problem")}
        >
          Problem / Soru
        </div>
        <div
          className={`tab ${activeTab === "suggestion" ? "active" : ""}`}
          onClick={() => handleTabClick("suggestion")}
        >
          Önerim Var
        </div>
      </div>
      <div className={`form-container ${formKey}`} key={formKey}>
        <form>
          <div className="form-group">
            <label>
              Ad Soyad <span>*</span>
            </label>
            <input type="text" placeholder="Adınızı ve soyadınızı girin" />
          </div>
          <div className="form-group">
            <label>
              E-Posta Adresiniz <span>*</span>
            </label>
            <input type="email" placeholder="E-posta adresinizi girin" />
          </div>
          <div className="form-group">
            <label>
              Telefon Numaranız <span>*</span>
            </label>
            <input type="tel" placeholder="Telefon numaranızı girin" />
          </div>
          <div className="form-group">
            <label>
              Mesajınız <span>*</span>
            </label>
            <textarea placeholder="Mesajınızı girin"></textarea>
          </div>
          <button type="submit">GÖNDER</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
