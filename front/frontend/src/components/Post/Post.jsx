import React from 'react'
import './Post.css'

import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'

const Post = ({ data }) => {
  return (
    <div className='Post'>
      <div className='detail'>
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
      <div className='postReact'>
        <img src={data.liked ? Heart : NotLike} alt='' />
      </div>
      <span style={{ color: 'var(--gray)', fontSize: '12px' }}>
        {data.likes} Votes
      </span>
    </div>
  )
}

export default Post
