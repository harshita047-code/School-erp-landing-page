import React from 'react';
import './ModuleOverview.css';
import {
  FaUserGraduate, FaChalkboardTeacher, FaMoneyBillWave,
  FaChartBar, FaBook, FaBus, FaClock, FaUsers
} from 'react-icons/fa';

const modules = [
  {
    icon: <FaBus />,
    title: "Transport Management System",
    description: "Helps students, parents, and staff with transport coordination."
  },
  {
    icon: <FaBook />,
    title: "Library Management System",
    description: "Operates library efficiently with automation features."
  },
  {
    icon: <FaClock />,
    title: "Timetable Management",
    description: "Teachers can generate and update timetables easily."
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Accounting: Managing School Fee",
    description: "Manages student fee collection records."
  },
  {
    icon: <FaUsers />,
    title: "Parent–Teacher Interaction",
    description: "Allows parents to view student progress in real-time."
  },
  {
    icon: <FaUserGraduate />,
    title: "Attendance Management System",
    description: "Keeps track of daily attendance in real-time."
  },
  {
    icon: <FaChartBar />,
    title: "Discipline Management System",
    description: "Monitors student discipline and productivity."
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "E-Learning System",
    description: "Supports real-time online web classes."
  }
];


const ModuleOverview = () => {
  return (
    <section className="module-section container " id="modules">
      <div className="row align-items-center">
        <div className="col-md-6 module-list" data-aos="fade-right">
          <h2 className="section-title mb-4">ERP Module Overview</h2>
          <ul className="list-unstyled">
            {modules.map((mod, index) => (
              <li key={index} className="module-item d-flex align-items-start mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <span className="module-icon me-3 fs-3">{mod.icon}</span>
              <div>
                <h5 className="mb-1">{mod.title}</h5>
                <p className="text-muted mb-0">{mod.description}</p>
              </div>
            </li>
            
            ))}
          </ul>
        </div>
        <div className="col-md-6 position-relative" data-aos="fade-left">
          {/* First ERP Image Block */}
<div className="erp-image-wrapper">
  <img
    src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg"
    alt="ERP Illustration 1"
    className="img-fluid rounded shadow"
  />
  <div className="erp-image-overlay">
    <div className="erp-callout-card">
      <h4 className="text-warning fw-bold mb-2">Smart ERP System</h4>
      <p className="text-white mb-0">Manage your institute efficiently with integrated modules.</p>
    </div>
  </div>
</div>

{/* Second ERP Image Block */}
<div className="erp-image-wrapper2 mt-4">
  <img
    src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
    alt="ERP Illustration 2"
    className="img-fluid rounded shadow"
  />
  <div className="erp-image-overlay2">
    <div className="erp-callout-card2">
      <h4 className="text-warning fw-bold mb-2">Advanced Module Access</h4>
      <p className="text-white mb-0">Get detailed analytics and insights for every department.</p>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default ModuleOverview;
