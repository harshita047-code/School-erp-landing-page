import React, { useEffect, useState } from 'react';
import './FAQSection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const faqs = [
  {
    question: "What is the School ERP system?",
    answer: "Our ERP system is a complete digital platform to manage school operations like attendance, fees, exams, and communication."
  },
  {
    question: "Is this ERP system mobile-friendly?",
    answer: "Yes! The platform is fully responsive and works smoothly on phones, tablets, and desktops."
  },
  {
    question: "Can we customize modules as per our school's needs?",
    answer: "Absolutely. Our system is modular and allows customization based on your specific requirements."
  },
  {
    question: "Is data secure in your system?",
    answer: "Yes, we follow industry-standard security practices including encryption and regular backups to ensure data safety."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id='faqs'>
      <h2 className="faq-title" data-aos="fade-up">FAQs – Have Questions? We’ve Got Answers!</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <i className={`arrow ${activeIndex === index ? 'rotate' : ''}`}>›</i>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
