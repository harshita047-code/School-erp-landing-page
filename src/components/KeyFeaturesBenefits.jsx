import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaChalkboardTeacher, FaUserGraduate, FaClock, FaFileInvoiceDollar, FaEnvelope, FaChartLine } from "react-icons/fa";
import "./KeyFeaturesBenefits.css";

const KeyFeaturesBenefits = () => {
  return (
    <div className="key-benefits-section  " id="features">
      <Container>
        {/* KEY FEATURES */}
        {/* <img
    src="https://img.freepik.com/free-photo/top-view-academic-cap-with-school-supplies-apple_23-2148756604.jpg?t=st=1746708511~exp=1746712111~hmac=f595627acb2c0c8d19422df85be98c9f76e0b400132d5945cd4852e5558cbf89&w=996"
    alt="features"
    className="img-fluid features"
  /> */}
        <h2 className=" heading text-center  py-5 fw-bold" data-aos="fade-up">Key Features</h2>
        
        <Row className="g-4 mb-5 ">
          {[
            { icon: <FaUserGraduate />, title: "Student Info Management", desc: "Manage student data seamlessly across classes and sections." },
            { icon: <FaClock />, title: "Attendance Tracking", desc: "Track daily attendance with real-time data and reports." },
            { icon: <FaFileInvoiceDollar />, title: "Fee Management", desc: "Automate fee collection and receipt generation." },
            { icon: <FaEnvelope />, title: "Parent Communication", desc: "Instant updates via SMS and Email to parents." }
          ].map((item, idx) => (
            <Col md={6} lg={3} key={idx} data-aos="zoom-in">
              <Card className="feature-card text-center shadow-sm h-100">
                <Card.Body>
                  <div className="icon mb-3  fs-2">{item.icon}</div>
                  <Card.Title className="fw-bold">{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* BENEFITS */}
        <h2 className=" heading text-center mb-5  fw-bold" data-aos="fade-up">Why Choose Our ERP?</h2>
        <Row className="g-4 ">
          {[
            { icon: <FaChartLine />, title: "Boost Productivity", desc: "Save admin time with automation and centralized control." },
            { icon: <FaChalkboardTeacher />, title: "Easy to Use", desc: "Simple and intuitive interface for staff and teachers." },
            { icon: <FaClock />, title: "Real-time Access", desc: "Access data from anywhere at any time." },
            { icon: <FaEnvelope />, title: "Better Engagement", desc: "Strengthen parent-school communication." }
          ].map((item, idx) => (
            <Col md={6} lg={3} key={idx} data-aos="flip-left">
              <Card className="benefit-card text-center shadow-sm h-100">
                <Card.Body>
                  <div className="icon mb-3  fs-2">{item.icon}</div>
                  <Card.Title className="fw-bold">{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default KeyFeaturesBenefits;
