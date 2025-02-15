import React from 'react';
import { PersonalInfo } from '../../types';

interface AboutProps {
  info: PersonalInfo;
}

const About: React.FC<AboutProps> = ({ info }) => {
  return (
    <section className="py-5" id="about">
      <div className="container">
        <h2 className="text-center mb-5">Giới Thiệu</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <img 
                  src="https://scontent.fsgn24-2.fna.fbcdn.net/v/t39.30808-6/475406716_2314090768955736_7860116431730870250_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SDl29piltaQQ7kNvgFgGptE&_nc_oc=Adg4IHOl3ueg9F6eA61C1P10P1kHu0hrH94Zjl-h8YT5uo2ScX4ZUiafUN-azZnV_q4&_nc_zt=23&_nc_ht=scontent.fsgn24-2.fna&_nc_gid=AZFtLH6yWLGC77E8GpVLFHF&oh=00_AYAHn7QmYAAEoTcavdS82RzRNCMmyVOv3HyagpN-eN1L4g&oe=67B67D2E" 
                  alt="Profile" 
                  className="rounded-circle mb-3"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <div className="contact-info">
                  <p className="mb-2">
                    <i className="fas fa-envelope me-2 text-primary"></i>
                    {info.email}
                  </p>
                  <p className="mb-2">
                    <i className="fas fa-phone me-2 text-primary"></i>
                    {info.phone}
                  </p>
                  <p className="mb-2">
                    <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                    {info.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <p className="lead">{info.about}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 