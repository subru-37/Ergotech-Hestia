import React from 'react'
import './Features.css';

const Features = (props) => {
  return (
    <div className='grid-card'>
        <h3>{props.icon}</h3>
        <h5>{props.feat}</h5>
    </div>
  )
}

export default Features;
