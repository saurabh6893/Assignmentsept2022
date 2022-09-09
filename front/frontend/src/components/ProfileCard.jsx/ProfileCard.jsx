import React from 'react'
import Cover from '../../img/coverpic.jpg'
import Profile from '../../img/pic.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
  const ProfilePage = true
  return (
    <div className='ProfileCard'>
      <div className='ProfileImages'>
        <img src={Cover} alt='' />
        <img src={Profile} alt='' />
      </div>

      <div className='ProfileName'>
        <span>Saurabh Kedar</span>
        <span>FrontEnd Developer</span>
        <span>S.O.A.L</span>

        <button className='logout'>Logout</button>
      </div>

      {ProfilePage ? '' : <span>My Profile</span>}
    </div>
  )
}

export default ProfileCard
