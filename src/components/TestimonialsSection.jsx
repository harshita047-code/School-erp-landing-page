import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "./TestimonialsSection.css";

const testimonials = [
  {
    name: "Ritika Sharma",
    feedback: "This ERP system has made managing school tasks so much easier!",
    avatar: "https://th.bing.com/th/id/OIP.zscpnj46TH3Uimi0WStXrwHaJQ",
  },
  {
    name: "Anil Verma",
    feedback: "User-friendly, intuitive, and saves us hours every week.",
    avatar: "https://th.bing.com/th/id/OIP.GXegVoGqtNSzQ0Iyk-C1GwHaGl",
  },
  {
    name: "Neha Joshi",
    feedback: "Modules are so well-structured. Training was super easy!",
    avatar: "https://smmcnj.com/wp-content/uploads/2022/11/NaliMeenakshiSindhuriMD250x310.jpg",
  },
  {
    name: "Saurav Mehta",
    feedback: "Reliable platform for all school operations.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Kavita Singh",
    feedback: "Support team is amazing! Helped us onboard smoothly.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rahul Dahiya",
    feedback: "Great experience. Our staff loves it!",
    avatar: "https://randomuser.me/api/portraits/men/58.jpg",
  },
];

const TestimonialsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="scrolling-testimonials-section" data-aos="fade-up">
      <h2 className="text-center fs-1 fw-bold mb-4 ">Our Happy Users</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        speed={1000}
        pagination={{ clickable: true }}
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="scrolling-swiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="scrolling-card">
              <img src={item.avatar} alt={item.name} className="scrolling-avatar" />
              <p className="scrolling-feedback">"{item.feedback}"</p>
              <span className="scrolling-name">— {item.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;
