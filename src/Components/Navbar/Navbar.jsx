import React,{useState,useEffect,useContext} from 'react'
import { ThemeContext } from '../../App';
import { Link } from 'react-router-dom';
import SegmentIcon from '@mui/icons-material/Segment';
import {Drawer} from '@mui/material';
import './Navbar.css'
import {  signOut } from 'firebase/auth';
import { auth } from '../../firebase'
export default function Navbar() {
  const logout = async () => {
    await signOut(auth);
    setAuth({
      name:'',
      email:'',
      acctype:'',
      pass:'',
      confirmpass:'',
      signedin: false
    })
  };
  const {signin,setSignin,signup,setSignup,auths,setAuth,width1} = useContext(ThemeContext);
  const [scroll, setScroll] = useState(false);
  const [scrollp, setScrollP] = useState(window.scrollY);
  const [drawer, setDrawer] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawer( open );
  };
  // useEffect(()=>{
  //   console.log(value)
  // },[value])
  useEffect(() => {
    window.addEventListener("scroll", navScrolled);
    function navScrolled(e) {
      setScrollP(window.scrollY);
      if (window.scrollY > scrollp) {
        setScroll(true);
        // console.log(scrollp,scroll)
      } else if (window.scrollY <= scrollp){
        setScroll(false);
      }
      // console.log(scrollp, scroll)
    }
    return () => {
      window.removeEventListener("scroll", navScrolled);
    };
  }, [scrollp]);
  return (
    <div className={ scroll ? 'parent_navbar scrolled' : 'parent_navbar'}>
      <button style={{border:'none',padding:'0',background:'transparent', display: width1>900 ?'none':'block'}} onClick={toggleDrawer(true)}><SegmentIcon sx={{fontSize:'40px'}}/></button>
      <div className='container'>
      <div className='logo'>
            <h2>Hestia</h2>
        </div>
        <div>
          <ul className='navitems' style={{listStyle:'none',flexDirection:'row',display: width1>900 ? 'flex':'none'}}>
            <Link to='/' className='navitem'>Home</Link>
            <Link to='/Searcher' className='navitem'>Search</Link>
            <Link to='/' className='navitem'>About Us</Link>
          </ul>
        </div>
        <div className='buttons'>
          {
            auths.signedin ? <button style={{display:width1>900?'block':'none'}} className='logout' onClick={()=>(logout())}><h3 style={{fontWeight:'400',cursor:'pointer'}}>Log out</h3></button> 
                            :
    <div style={{display:'flex',alignItems:'center',flexDirection:'row'}}>
      <button style={{display: width1>900 ? 'flex' : 'none',alignItems:'center',justifyContent:'center'}} onClick={()=>(setSignup(!signup))} className='signup'>Sign up</button>
      <button style={{display: width1>900 ? 'flex' : 'none',alignItems:'center',justifyContent:'center'}} onClick={()=>(setSignin(!signin))} className='signin'>Sign in</button>
    </div> 
          }
        </div>
      </div>
      <Drawer
            anchor='left'
            open={drawer}
            onClose={toggleDrawer(false)}
            sx={{'& .MuiPaper-root':{
              backgroundColor:'#F6F6F6',
              width: {xs: '80vw',sm:'50vw'},
              display:'flex',
              alignItems:'center',
              justifyContent:'center'

            }}}
        >
            <ul className='navitems' style={{listStyle:'none',flexDirection:'column',display:'flex'}}>
              <Link onClick={toggleDrawer(false)} to='/' className='navitem'>Home</Link>
              <Link onClick={toggleDrawer(false)} to='/Searcher' className='navitem'>Search</Link>
              <Link onClick={toggleDrawer(false)} to='/' className='navitem'>About Us</Link>
              {
            auths.signedin ? <button className='logout' onClick={()=>{ 
             logout()
             setDrawer(false)}}></button>:
                            <div>
                            <button style={{display: 'flex',alignItems:'center',justifyContent:'center'}} onClick={()=>{
                                                                                                                setDrawer(false)
                                                                                                                setSignup(!signup)
              }} className='signup'>Sign up</button>
              <button style={{display: 'flex',alignItems:'center',justifyContent:'center'}} onClick={()=>{
                                                                                                                setDrawer(false)
                                                                                                                setSignin(!signin)
              }} className='signin'>Sign in</button>
                            </div>
        }
            </ul>
      </Drawer>
    </div>
  )
}
