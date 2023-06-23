import React from 'react';
import './UserInfo.css';

const UserInfo = () => {
  return (
    <div className="userinfo">
      {/* <span className='selectortheme'>Theme</span> */}
      <div className="useravatar">
        <p className="username"> Name </p>
        <button class="image-avatar"></button>
      </div>
    </div>
  )
}

export default UserInfo;

