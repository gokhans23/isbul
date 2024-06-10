import React, { useState } from "react";
import "../styles/HelpSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const HelpSection = () => {
  const [activeCategory, setActiveCategory] = useState("Genel");
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const categories = ["Genel", "Kurumsal", "Bireysel", "Mobil"];
  const questions = {
    Genel: [
      {
        question: "isbul.net’e üye olmak ücretli mi?",
        answer: "isbul.net'e üye olmak tamamen ücretsizdir.",
      },
      {
        question: "isbul.net’e üye olmadan uygulamayı kullanabilir miyim?",
        answer: "Evet, uygulamayı üye olmadan da kullanabilirsiniz.",
      },
      {
        question: "Hesabımı siler ve üyeliğimi iptal edersem ne olur?",
        answer:
          "Hesabınızı sildiğinizde tüm verileriniz kalıcı olarak silinir.",
      },
      {
        question: "Mail adresimi ve şifremi değiştirebilir miyim?",
        answer:
          "Evet, mail adresinizi ve şifrenizi istediğiniz zaman değiştirebilirsiniz.",
      },
      {
        question:
          "isbul.net’ten herhangi bir e-posta almak istemiyorum ne yapamam gerekiyor?",
        answer:
          "E-posta ayarlarından isbul.net'ten gelen postaları devre dışı bırakabilirsiniz.",
      },
      {
        question: "Telefon doğrulaması neden gereklidir?",
        answer:
          "Telefon doğrulaması hesabınızın güvenliğini sağlamak için gereklidir.",
      },
      {
        question: "Şifre sıfırlama maili gelmiyor ne yapmam gerekir?",
        answer:
          "Spam klasörünü kontrol edin. Gelmiyorsa destekle iletişime geçin.",
      },
      {
        question: "isbul.net güvenilir mi?",
        answer: "Evet, isbul.net güvenilir bir platformdur.",
      },
    ],
    Kurumsal: [
      {
        question: "isbul.net kurumsal üyelik ücretli mi?",
        answer: "Kurumsal üyelik için ücretlendirme bulunmaktadır.",
      },
      {
        question: "Ücretsiz ilan hakkı ne zaman tanımlanır?",
        answer: "Ücretsiz ilan hakkı kayıt sonrası otomatik olarak tanımlanır.",
      },
      {
        question: "İlanım yayınlanmadı ne yapmam gerekiyor?",
        answer: "İlanınızın yayınlanmaması durumunda destekle iletişime geçin.",
      },
      {
        question: "İlanlar neden onay işleminden geçiyor?",
        answer:
          "İlanların doğruluğunu ve güvenilirliğini sağlamak için onay işleminden geçer.",
      },
      {
        question: "İlan nasıl verilir?",
        answer:
          "İlan vermek için ilan oluşturma formunu doldurmanız yeterlidir.",
      },
      {
        question: "İlan yayınlanma süresi ne kadardır?",
        answer: "İlanlar genellikle 30 gün boyunca yayında kalır.",
      },
      {
        question: "Engelli iş ilanı nasıl verilir?",
        answer:
          "Engelli iş ilanı vermek için ilgili kategoriyi seçebilirsiniz.",
      },
      {
        question: "İlan tarihini nasıl güncelleyebilirim?",
        answer: "İlan tarihini ilan yönetimi bölümünden güncelleyebilirsiniz.",
      },
      {
        question: "Şirket bilgileri nasıl gizlenir?",
        answer:
          "Şirket bilgilerini gizlemek için profil ayarlarını kullanabilirsiniz.",
      },
      {
        question: "Şifremi unuttum?",
        answer:
          "Şifrenizi unuttuysanız şifre sıfırlama formunu kullanabilirsiniz.",
      },
      {
        question: "Firma telefon ve mail doğrulaması nasıl yapılır?",
        answer:
          "Firma telefon ve mail doğrulaması profil ayarlarından yapılabilir.",
      },
    ],
    Bireysel: [
      {
        question: "Özgeçmiş ne demek?",
        answer:
          "Özgeçmiş, iş başvurularınız için hazırladığınız kişisel bilgilerinizi içerir.",
      },
      {
        question: "İşverenler özgeçmiş adını görebilir mi?",
        answer: "Evet, işverenler özgeçmiş adınızı görebilir.",
      },
      {
        question: "Kaç tane özgeçmiş oluşturabilirim?",
        answer: "Birden fazla özgeçmiş oluşturabilirsiniz.",
      },
      {
        question: "Özgeçmişim olmadan iş başvurusu yapabilir miyim?",
        answer: "Özgeçmiş olmadan iş başvurusu yapmanız mümkün değildir.",
      },
      {
        question: "Önyazı nedir?",
        answer: "Önyazı, başvurunuzda yer alan kişisel bir tanıtım yazısıdır.",
      },
      {
        question: "Cv nasıl indiriliyor?",
        answer: "Cv'nizi profilinizden indirebilirsiniz.",
      },
      {
        question: "Referans eklemek neden önemlidir?",
        answer:
          "Referans eklemek, işverenlerin güvenilirliğinizi değerlendirmesi için önemlidir.",
      },
      {
        question: "Stajlarımı özgeçmişime nasıl ekleyebilirim?",
        answer:
          "Staj bilgilerinizi özgeçmiş düzenleme bölümünden ekleyebilirsiniz.",
      },
      {
        question: "Engellilere yönelik ilanlara nasıl ulaşabilirim?",
        answer:
          "Engellilere yönelik ilanlara ilan arama bölümünden ulaşabilirsiniz.",
      },
      {
        question: "Geçersiz ilanları nereye bildirebilirim?",
        answer: "Geçersiz ilanları destek ekibine bildirebilirsiniz.",
      },
      {
        question: "Şikayet ettiğim firma kim olduğumu bilecek mi?",
        answer: "Hayır, şikayetleriniz anonim olarak iletilir.",
      },
      {
        question: "Neden özgeçmiş tarihimi güncellemeliyim?",
        answer:
          "Özgeçmişinizi güncel tutmak, işverenlerin ilgisini çekmek için önemlidir.",
      },
      {
        question: "İş ilanına başvuru nasıl yapılır?",
        answer:
          "İş ilanına başvurmak için ilan detayına gidip başvur butonunu kullanabilirsiniz.",
      },
    ],
    Mobil: [
      {
        question: "Uygulamayı nasıl indirebilirim?",
        answer:
          "Uygulamayı App Store veya Google Play Store'dan indirebilirsiniz.",
      },
      {
        question: "Uygulamadan özgeçmiş oluşturabilir miyim?",
        answer: "Evet, uygulamadan özgeçmiş oluşturabilirsiniz.",
      },
      {
        question: "Uygulamayı kullanarak ilan verebilir miyim?",
        answer: "Evet, uygulamayı kullanarak ilan verebilirsiniz.",
      },
      {
        question: "Uygulama ücretsiz mi?",
        answer: "Evet, uygulama tamamen ücretsizdir.",
      },
    ],
  };

  const toggleQuestion = (index) => {
    setExpandedQuestions((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="help-section">
      <h2 className="help-title">YARDIM</h2>
      <div className="content">
        <div className="categories">
          {categories.map((category) => (
            <div
              key={category}
              className={`category ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <div className="questions">
          {questions[activeCategory].map((item, index) => (
            <div key={index} className="question-container">
              <div className="question" onClick={() => toggleQuestion(index)}>
                <div className="question-header">
                  <span>{item.question}</span>
                  <FontAwesomeIcon
                    icon={expandedQuestions[index] ? faAngleUp : faAngleDown}
                  />
                </div>
              </div>
              {expandedQuestions[index] && (
                <div className="question-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
