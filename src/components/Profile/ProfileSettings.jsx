import React, { useState, useEffect } from 'react';
import './ProfileSettings.css';
import image from '../../assets/image.jpg';

const ProfileSettings = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedBackgroundImage = localStorage.getItem('backgroundImage');
    const storedProfileImage = localStorage.getItem('profileImage');
    if (storedBackgroundImage) setBackgroundImage(storedBackgroundImage);
    if (storedProfileImage) setProfileImage(storedProfileImage);
  }, []);


  const handleBackgroundUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        localStorage.setItem('backgroundImage', base64Image);
        setBackgroundImage(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        localStorage.setItem('profileImage', base64Image);
        setProfileImage(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-settings-container">
     
      {/* Background Image */}
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <label className="upload-label">
          <input type="file" onChange={handleBackgroundUpload} hidden />
          Set Background
        </label>
      </div>

      {/* Profile Image */}
      <div className="profile-image">
        <img src={profileImage || image} alt="profile" />
        <label className="upload-label profile-upload">
          <input type="file" onChange={handleProfileUpload} hidden />
          Set Profile
        </label>
      </div>

      {/* User Details */}
      <div className="user-details">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="input-field"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
      </div>

      
      <div className="action-icons">
        <button className="icon-button">fashare</button>
        <button className="icon-button">faplus</button>
      </div>
    </div>
  );
};

export default ProfileSettings;
