import React,{useState,useEffect,useContext} from 'react'
import { ThemeContext } from '../../App';
import { Link } from 'react-router-dom';
import './Navbar.css'
export default function Navbar() {
  const {value,setValue,auth,setAuth} = useContext(ThemeContext);
  const [scroll, setScroll] = useState(false);
  const [scrollp, setScrollP] = useState(window.scrollY);
  // useEffect(()=>{
  //   console.log(value)
  // },[value])
  useEffect(() => {
    window.addEventListener("scroll", navScrolled);
    function navScrolled(e) {
      setScrollP(window.scrollY);
      if (window.scrollY > scrollp) {
        setScroll(true);
        console.log(scrollp,scroll)
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
      <div className='container'>
      <div className='logo'>
            <h2>Hestia</h2>
        </div>
        <div>
          <ul className='navitems' style={{listStyle:'none',display:'flex',flexDirection:'row'}}>
            <Link to='/' className='navitem'>Home</Link>
            <Link to='/' className='navitem'>Search</Link>
            <Link to='/' className='navitem'>About Us</Link>
          </ul>
        </div>
        <div className='buttons'>
          {
            auth.signedin ? <button className='logout' onClick={()=>(setAuth({
    name:'',
    email:'',
    acctype:'',
    pass:'',
    confirmpass:'',
    signedin: false
  }))}><h3 style={{fontWeight:'400',cursor:'pointer'}}>Log out</h3></button> 
                            :
                            <div>
                              <button onClick={()=>(setValue(!value))} className='signup'>Sign up</button>
                              <button onClick={()=>(setValue(!value))} className='signin'>Sign in</button>
                            </div> 
          }
        </div>
      </div>
    </div>
  )
}
