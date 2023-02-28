import React,{useState,useEffect,useContext} from 'react'
import { ThemeContext } from '../../App';
import './Navbar.css'
export default function Navbar() {
  const {value,setValue} = useContext(ThemeContext);
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
            <li className='navitem'>Home</li>
            <li className='navitem'>Search</li>
            <li className='navitem'>About Us</li>
          </ul>
        </div>
        <div className='buttons'>
          <button onClick={()=>(setValue(!value))} className='signup'>Sign up</button>
          <button onClick={()=>(setValue(!value))} className='signin'>Sign in</button>
        </div>
      </div>
    </div>
  )
}
