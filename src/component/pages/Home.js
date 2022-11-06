import React from 'react'
import TopHome from './TopHeader'
import MainHome from './MainHome'

export default function Home({handelClick}) {
  return (
    <div>
        <TopHome handelClick={handelClick} />
        <MainHome />
    </div>
  )
}
