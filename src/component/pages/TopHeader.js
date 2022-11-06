import React from 'react'

export default function TopHeader({handelClick}) {
  return (
    <div className='top-menue'>
        <div className="menue"><i className="fa-solid fa-bars mobile-hidden" onClick={handelClick}></i></div>
        <p>پنل ادمین</p>
    </div>
  )
}
