import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <section className="profile">
      <img src="/fotoyo.jpeg" alt="Foto de perfil" className="profile-img" />
      <div className="profile-info">
        <h2>Nicolas Donneys Alvarado</h2>
        <p>Email: <a href="mailto:nicolas.donneys@uao.edu.co">nicolas.donneys@uao.edu.co</a></p>
        <div className="social-icons">
          <a href="https://www.instagram.com/nicolasdonney.29?igsh=amdrbGlpeHR5Z2c2" target="_blank" rel="noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100095024059967&mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
        <div className="description">
          <p>Soy estudiante de ingeniería multimedia de la Universidad Autónoma de Occidente en la ciudad de Cali...</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
