import React from "react";
import "./WhoWeAre.css"; 

const WhoWeAre = () => {
  return (
    <section className="who-we-are-section ">
    <div className="container text-center text-white">
      <h5 className="sub-heading mb-2" data-aos="fade-down">Who We Are</h5>
      <h2 className="main-heading mb-3 px-md-5" data-aos="fade-up">
        Digisolvnet is building a smart ERP solution to digitally empower Schools, Teachers, Parents, and Students.
      </h2>
      <p className="description px-md-5" data-aos="fade-up" data-aos-delay="200">
        We aim to bridge communication gaps, simplify school operations, and drive India's education system toward a fully digital future.
        From attendance to academics, everything in one place—secure, simple, and smart.
        
      </p>
      <button className="read-more-btn mt-4" data-aos="zoom-in" data-aos-delay="300">
        Read More →
      </button>
  
      
      <div className="row justify-content-center mt-5">
        <div className="col-md-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="400">
          <div className="icon-card">
            <img src="https://calvin.me/static/e7ee0f29c3820750a32df31ddb15fce0/92344/device-mockup.png" alt="ERP Dashboard" />
            <h5>Smart Dashboard</h5>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="500">
          <div className="icon-card">
            <img src="https://thumbs.dreamstime.com/b/light-blue-background-checkered-notebook-words-attendance-report-black-pencil-215612581.jpg" alt="Attendance" />
            <h5>Attendance</h5>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="600">
          <div className="icon-card">
            <img src="https://campus7.in/wp-content/uploads/2022/03/online-fee-management-module.jpg" alt="Fee Management" />
            <h5>Fees Management</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
  

  );
};

export default WhoWeAre;
