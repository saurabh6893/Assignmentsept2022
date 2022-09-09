import React from 'react'
import ProfileImage from '../../img/pic.jpg'
import './PostShare.css'

const PostShare = () => {
  return (
    <div className='PostShare'>
      <img src={ProfileImage} alt='' />
      <div>
        <input type='text' placeholder="What's happening" />
        <button className='btx'>Post</button>
      </div>
    </div>
  )
}

export default PostShare
