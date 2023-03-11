import React,{useContext} from 'react'
import { TextField } from '@mui/material';
import { ThemeContext } from '../../App';
import SearchIcon from '@mui/icons-material/Search';

import "./Landing.css";
import Apartment from "../../Assets/apartment.svg";
import TopPicks from "../../Components/TopPicks/TopPicks";
import Features from "../../Components/Features/Features";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

import { preview } from '../../Assets/data';
export default function Landing() {
  const {search,setSearch,width1,setDrawer,setSearchResult} = useContext(ThemeContext);
  const navigate = useNavigate();
  function handleSubmit(event){
    const loc = search.location;
    const Name = search.name;
    setSearchResult(preview.filter(({location,name})=>{
      event.preventDefault();
      navigate('/Searcher')
      return(
        location.toLowerCase().includes(loc.toLowerCase()) && 
        name.toLowerCase().includes(Name.toLowerCase()));
    }))
  }
    function handleChange(event) {
      const { name, value } = event.target;
      setSearch((preValue) => {
        return {
          ...preValue,
          [name]: value
        };
      }
      );
      // console.log(name,value)
    }
    const toggleDrawer = (open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setDrawer( open );
    };
  return (
    <div className="sett landing-page" style={{ minHeight: "200vh" }}>
      <div className="landing-one">
        <div className="landing-content">
          <div style={{minHeight:'60%',display:'flex',alignItems:'flex-start',flexDirection:'column',justifyContent:'space-around',width:'75%'}}>
          <h1>Welcome to Hestia!</h1>
          <p style={{width:'70%'}}>
            Worried that you can’t find an apartment? Find vacant apartments/
            hostels/ PG’s nearby and grab a home now!
          </p>
          <form className='search' style={{width:'100%',padding:'10px 0'}} onSubmit={handleSubmit} method='post'>
            <button style={{border:'none',padding:'0 20px 10px 0',background:'transparent', display: width1>900 ?'none':'block'}} onClick={toggleDrawer(true)}><MenuIcon sx={{fontSize:'40px'}}/></button>
            <TextField 
                name='name'
                autoComplete='off'
                value={search.name}
                onChange={handleChange} 
                sx={{
                    width: '80%',
                    margin: '0 0 10px 0',
                    padding:'0 5px 0 0',
                    '& .MuiOutlinedInput-root':{
                        backgroundColor:'#F8F8FF',
                        color:'black',
                      '& fieldset':{
                        border: '1px solid #0C4271',
                        color:'black'
                      },
                      '&.Mui-focused fieldset': {
                        border: '1px solid #0C4271',
                        color: 'black'
                      },
                    },
                    '& .MuiOutlinedInput-root:hover':{
                      '& fieldset':{
                        border: '1px solid #0C4271',
                        color: 'black'
                      }
                    }
                    }} 
                InputProps={{style: {color:'black',fontFamily:"Inter"}}}
                InputLabelProps={{
                  style: { color:'black',fontFamily:"Inter"},
                }}
                variant='outlined'
                label="Name" />
                        <TextField 
                name='location'
                autoComplete='off'
                value={search.location}
                onChange={handleChange} 
                sx={{
                    width: '80%',
                    margin: '0 0 10px 0',
                    padding:'0 5px 0 0',
                    '& .MuiOutlinedInput-root':{
                        backgroundColor:'#F8F8FF',
                        color:'black',
                      '& fieldset':{
                        border: '1px solid #0C4271',
                        color:'black'
                      },
                      '&.Mui-focused fieldset': {
                        border: '1px solid #0C4271',
                        color: 'black'
                      },
                    },
                    '& .MuiOutlinedInput-root:hover':{
                      '& fieldset':{
                        border: '1px solid #0C4271',
                        color: 'black'
                      }
                    }
                    }} 
                InputProps={{style: {color:'black',fontFamily:"Inter"}}}
                InputLabelProps={{
                  style: { color:'black',fontFamily:"Inter"},
                }}
                variant='outlined'
                label="Location" />
                <button type='submit' className='search_button'><SearchIcon sx={{fontSize:'30px',color:'white'}}/></button>
            </form>
          </div>
        </div>
        <div className="landing-image">
          <img src={Apartment} alt="apartment"></img>
        </div>
      </div>

      <h1>Top Picks</h1>
      <div className="top-picks-cards col">
        <div className="row">
          <TopPicks title="title" desc="desc" />
          <TopPicks title="title" desc="desc" />
          <TopPicks title="title" desc="desc" />
        </div>
        <div className="row">
          <TopPicks title="title" desc="desc" />
          <TopPicks title="title" desc="desc" />
          <TopPicks title="title" desc="desc" />
        </div>
      </div>

      <h1>Why Hestia?</h1>
      <div className="features-grid-container">
        <Features icon="icon" feat="text"/>
        <Features icon="icon" feat="text"/>
        <Features icon="icon" feat="text"/>
        <Features icon="icon" feat="text"/>
        <Features icon="icon" feat="text"/>
        <Features icon="icon" feat="text"/>
      </div>

      {/* footer */}

      <div className="footer">
        <h1>Hestia</h1>
        <div className="options">
          <h6>Home</h6>
          <h6>Search</h6>
          <h6>About Us</h6>
        </div>
        <div className="socials"></div>
      </div>
    </div>

    
  );
}
