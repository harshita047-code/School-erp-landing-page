import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { FaUserGraduate, FaUserTie, FaChalkboardTeacher, FaUsersCog } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Rolebased.css';

const RoleTabs = () => {
  const [activeTab, setActiveTab] = useState('student');

  const roleContent = {
    student: [
      {
        title: 'Track Attendance',
        description: 'Students can view daily attendance and get alerts if absent.',
        image: 'https://cdn-icons-png.flaticon.com/512/4140/4140047.png'
      },
      {
        title: 'Access Assignments',
        description: 'Download, complete, and submit assignments online.',
        image: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
      },
      {
        title: 'View Progress Reports',
        description: 'Check academic performance reports anytime.',
        image: 'https://cdn-icons-png.flaticon.com/512/3195/3195599.png'
      },
    ],
    parent: [
      {
        title: 'Monitor Child Activity',
        description: 'Track your child’s progress, attendance & behavior.',
        image: 'https://cdn-icons-png.flaticon.com/512/2038/2038854.png'
      },
      {
        title: 'Fee Reminders',
        description: 'Get notified about upcoming or pending fees.',
        image: 'https://cdn-icons-png.flaticon.com/512/1046/1046776.png'
      },
      {
        title: 'Direct Communication',
        description: 'Connect with teachers or school admin in one click.',
        image: 'https://cdn-icons-png.flaticon.com/512/726/726476.png'
      },
    ],
    teacher: [
      {
        title: 'Manage Classes',
        description: 'Mark attendance, upload results & manage schedules.',
        image: 'https://cdn-icons-png.flaticon.com/512/2907/2907511.png'
      },
      {
        title: 'Student Evaluation',
        description: 'Assess students and generate reports easily.',
        image: 'https://cdn-icons-png.flaticon.com/512/1055/1055644.png'
      },
      {
        title: 'Announcements',
        description: 'Send updates and circulars to students & parents.',
        image: 'https://cdn-icons-png.flaticon.com/512/1250/1250615.png'
      },
    ],
    management: [
      {
        title: 'Dashboard Insights',
        description: 'Get detailed analytics of school performance.',
        image: 'https://cdn-icons-png.flaticon.com/512/3790/3790156.png'
      },
      {
        title: 'Staff Oversight',
        description: 'Manage teacher roles, timings, and duties.',
        image: 'https://cdn-icons-png.flaticon.com/512/3063/3063827.png'
      },
      {
        title: 'Fee & Admission',
        description: 'Control fee collection and student admissions efficiently.',
        image: 'https://cdn-icons-png.flaticon.com/512/3790/3790163.png'
      },
    ],
  };

  return (
    <div className="role-tabs-section animate__animated animate__fadeIn">
      <div className="container text-center">
        <h2 className="fw-bolder mb-3 fs-1">Role-Based Portal Benefits</h2>
        <p className="  fw-bold mb-4">Customized access and benefits for each user type.</p>

        <div className="btn-group mb-4" role="group">
          <button onClick={() => setActiveTab('student')} className={`btn btn-outline-danger ${activeTab === 'student' && 'active'}`}><FaUserGraduate /> Student</button>
          <button onClick={() => setActiveTab('parent')} className={`btn btn-outline-danger ${activeTab === 'parent' && 'active'}`}><FaUserTie /> Parent</button>
          <button onClick={() => setActiveTab('teacher')} className={`btn btn-outline-danger ${activeTab === 'teacher' && 'active'}`}><FaChalkboardTeacher /> Teacher</button>
          <button onClick={() => setActiveTab('management')} className={`btn btn-outline-danger ${activeTab === 'management' && 'active'}`}><FaUsersCog /> Management</button>
        </div>

        <div className="swiper-container animate__animated animate__fadeInUp">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {roleContent[activeTab].map((card, index) => (
              <SwiperSlide key={index}>
                <div className="card role-card shadow-lg h-100">
                  <div className="card-body text-center">
                    <img src={card.image} alt={card.title} className="mb-3" style={{ width: '60px', height: '60px' }} />
                    <h5 className="card-title  fw-semibold">{card.title}</h5>
                    <p className="card-text fw-bold text-dark">{card.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RoleTabs;
