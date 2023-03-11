import React,{useState} from 'react'
import './SearchCard.css'
import imtg from '../../Assets/img-pg.png'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
export default function SearchCard(props) {
  const [state,setState] = useState(false)
  return (
    <div className='card-section'>
        <div className='pic-section'><img className='Image' alt='' src={imtg}></img></div>
        <div className='preview-section'>
            <div className='preview-title'>
                <p className='title'>{props.title}</p>
                <div style={{display:'flex',alignItems:'center',height:'50px',flexDirection:'row'}}>
                  <p style={{fontSize:'1.2rem'}}>{props.mw}</p>
                  <button onClick={()=>(setState(!state))} style={{border:'none',background:'transparent',cursor:'pointer',margin:'6px 0 0 10px'}}>{state ? <BookmarkIcon/> : <BookmarkBorderIcon/>}</button>
                </div>
              </div>
              <p style={{fontWeight: '400',fontSize: '1rem',color: '#2C2A2A',paddingBottom:'10px',lineHeight: '15px'}}>Description</p>
            <div className='preview-desc'><p className='desc'>{props.description}</p></div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'flex-end',width:'100%'}}><p className='hover-stat'>Read More..</p></div>
            {/* <div>5 students from MEC are currently staying here</div> */}
        </div>
    </div>
  )
}
