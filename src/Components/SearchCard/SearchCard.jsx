import React from 'react'
import './SearchCard.css'
import imtg from '../../Assets/img-pg.png'
export default function SearchCard(props) {
  return (
    <div className='card-section'>
        <div className='pic-section'><img className='Image' src={imtg}></img></div>
        <div className='preview-section'>
            <div className='preview-title'><p className='title'>{props.title}</p><p style={{fontSize:'1rem'}}>{props.mw}</p></div>
            <p style={{fontWeight: '400',fontSize: '1rem',color: '#2C2A2A',paddingBottom:'10px',lineHeight: '15px'}}>Description</p>
            <div className='preview-desc'><p className='desc'>{props.description}</p></div>
            {/* <div>5 students from MEC are currently staying here</div> */}
        </div>
    </div>
  )
}
