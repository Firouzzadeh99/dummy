import React from 'react';
import profile from '../../images/image.jpg';
 
export default function Sidebar() {
  return (
    <>
      <div className="col-3 col-md-3 col-lg-2 col-xl-2 wrapper-sidebar">
    <div className='profile'> 
        <div className='profile-img'>
            <img src={profile} alt="profile" />
        </div>
        <p className='title-profile'>پنل مدیریت سایت</p>
    </div>
    <div className='list-wrapper'>
        <p>صفحه تستی</p>
        <ul className='lists'>
            <li><i className="fa-solid fa-house"></i><a href="./">داشبورد</a></li>
            <li><i className="fa-solid fa-book"></i><a href="./">کتابخانه</a></li>
            <li><i className="fa-regular fa-bell"></i><a href="./">پیغام ها</a></li>
            <li><i className="fa-solid fa-message"></i><a href="./">پشتیبانی</a></li>
        </ul>
    </div>
    </div>
    </>
  )
}
