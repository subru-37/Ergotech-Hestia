import React,{useContext} from 'react'
import { TextField } from '@mui/material';
import { ThemeContext } from '../../App';
import {Drawer} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './Searcher.css';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Checkbox} from '@mui/material';
import SearchCard from '../../Components/SearchCard/SearchCard';
import CloseIcon from '@mui/icons-material/Close';
import { preview } from '../../Assets/data';
const checklist = ['wifi','ac','food','kitchen','pets','abathroom','sdeposit','curfew','hotwater','balcony','furnished','wheelchair']
export default function Searcher() {
    const {search,setSearch,filters,setFilters,width1,searchResult,setSearchResult} = useContext(ThemeContext);
    const [drawer, setDrawer] = React.useState(false);
    React.useEffect(()=>{
        if (search.location === '' && search.name === ''){
          return(setSearchResult(preview));
      }  
    },[search.location,search.name])
    React.useEffect(()=>{
      Filters(filters)
    },[filters])
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setDrawer( open );
      };
    function Filters(arr){
      const keys = [];
      const details = [];
      for (let properties in arr) {
        if (arr[properties] === true){
          keys.push(properties)
        }
      }
      // console.log(keys)
      if (keys.length!==0){
          preview.forEach((pg,index)=>{
            for (let s in keys){
              if (s && keys.find((y)=>(pg[y])) && !(details.includes(pg))){
                  details.push(pg)
              }
            }
          })
          // console.log(details)
          setSearchResult(details)
      }else{
        setSearchResult(preview)
      }
    }
    function changeSlider(arr){
      const valueSlider = arr.sliderValue;
      const details = [];
      if (arr.sliderValue === [1000,1000]){
        setSearchResult(preview)
        
      }
      else{
        preview.forEach((pg,index)=>{
          for(let s in arr){
            if (s === 'sliderValue'){
              const keySlider = pg.sliderValue;
              if ((keySlider[0]>=valueSlider[0] && keySlider[1]<=valueSlider[1]) || (keySlider[1]<=valueSlider[1] && keySlider[1]>=valueSlider[0]) || (keySlider[0]>=valueSlider[0] && keySlider[0]<=valueSlider[1])){
                details.push(pg)
              }
            }
          }
        })
        setSearchResult(details)
        
      }
    }
    function handleSubmit(event){
      const loc = search.location;
      const Name = search.name;
      setSearchResult(preview.filter(({location,name})=>{
        return(
          location.toLowerCase().includes(loc.toLowerCase()) && 
          name.toLowerCase().includes(Name.toLowerCase()));
      }))
      event.preventDefault();

    }
    function handleCheck(event){
        const {name,checked} = event.target;
        setFilters((preValue)=>{
          return(
            {...preValue,
            [name]:checked
            }
          );
        })
    }
    const handleSlider = (event, newValue) => {
        setFilters((preValue) => {
            return {
              ...preValue,
              sliderValue: newValue
            };
          }
          );
      };
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
  return (
    <div className='sett parent_searcher'>
        <div className='search_box'>
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
                    padding:'0 5px',
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
                    padding:'0 5px',
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
        <div className='search_content' style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',width:'95%',flexDirection:'row'}}>
        <div className='filters' style={{display: width1<900?'none':'flex',justifyContent:'space-around',alignItems:'center',flexDirection:'column'}}>
            <div style={{borderBottom:'3px solid #F6F6F6',width:'110.5%',display:'flex',alignItems:'center',justifyContent:'center'}}><h2 style={{padding:'20px 0'}}>Filters</h2></div>
            <div style={{display:'flex',width:'100%',flexDirection:'column',padding:'10px'}}>
              <h3>Price</h3>
              <div style={{width:'100%'}}>
                <Slider
                    sx={{width:'20vw'}}
                    getAriaLabel={() => 'Price Range'}
                    value={filters.sliderValue}
                    onChange={handleSlider}
                    valueLabelDisplay="auto"
                    getAriaValueText={(value)=>(`${value}/-`)}
                    step={100}
                    min={1000}
                    max={20000}
                    size='small'
                />
                <div><h4>{filters.sliderValue[0]}-{filters.sliderValue[1]}</h4></div>
                <button onClick={()=>(changeSlider(filters))}>Submit</button>
              </div>
          </div>
          <div style={{borderBottom:'3px solid #F6F6F6',width:'110.5%',display:'flex',alignItems:'center',justifyContent:'center'}}><h2 style={{padding:'20px 0'}}>Facilities</h2></div>
          <div style={{display:'flex',alignItems:'flex-start',flexDirection:'column',width:'80%'}}>
          {checklist.map((value,index)=>{
            return(
              <FormControlLabel key={index} sx={{'&. MuiTypography-root':{fontSize:'30px'}}}
              control={<Checkbox 
              name={value}
              checked={filters.value} 
              sx={{ '& .MuiSvgIcon-root': { fontSize: '25px'  } }} 
              onChange={handleCheck}></Checkbox>} label={value} />
            );
          })}
          </div>
      </div>
              <Drawer
                      anchor='left'
                      open={drawer}
                      onClose={toggleDrawer(false)}
                      sx={{'& .MuiPaper-root':{
                        backgroundColor:'#F6F6F6',
                        width: {xs: '90vw',sm:'50vw'},
                        display:'flex',
                        alignItems:'flex-end'
                      }}}
                  >
                  <button style={{border:'none',padding:'20px 20px 10px 0',background:'transparent', display: width1>600 ?'none':'block'}} onClick={toggleDrawer(false)}><CloseIcon sx={{fontSize:'40px'}}/></button>
                      <div className='filters' style={{display:'flex',justifyContent:'space-around',alignItems:'center',flexDirection:'column',width:'100%'}}>
                        <div style={{borderBottom:'3px solid #F6F6F6',width:'110.5%',display:'flex',alignItems:'center',justifyContent:'center'}}><h2 style={{padding:'20px 0'}}>Filters</h2></div>
                        <div style={{display:'flex',width:'100%',flexDirection:'column',padding:'10px'}}>
                          <h3>Price</h3>
                          <div style={{width:'100%'}}>
                          <Slider
                              sx={{width:{sm:'100%',lg:'20vw'}}}
                              getAriaLabel={() => 'Price Range'}
                              value={filters.sliderValue}
                              onChange={handleSlider}
                              valueLabelDisplay="auto"
                              getAriaValueText={(value)=>(`${value}/-`)}
                              step={100}
                              min={1000}
                              max={20000}
                              size='small'
                          />
                          <div><h4>{filters.sliderValue[0]}-{filters.sliderValue[1]}</h4></div>
                          <button onClick={()=>{changeSlider(filters);setDrawer(false)}}>Submit</button> 
                          </div>
                      </div>
                      <div style={{borderBottom:'3px solid #F6F6F6',width:'120%',display:'flex',alignItems:'center',justifyContent:'center'}}><h2 style={{padding:'20px 0'}}
                      >Facilities</h2></div>
                      <div style={{display:'flex',alignItems:'flex-start',flexDirection:'column',width:'90%'}}>
                      {checklist.map((value,index)=>{
                        return(
                          <FormControlLabel key={index} control={<Checkbox 
                          name={value} 
                          checked={filters.value} 
                          sx={{ '& .MuiSvgIcon-root': { fontSize:'26px'  } }} 
                          onChange={handleCheck}></Checkbox>} label={value} />
                        );
                      })}
                      </div>
                  </div>
                  </Drawer>
              
              <div style={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'space-around'}}>
              <h2>Showing Results For ....</h2>
              {searchResult.map(({id,name,mw,description})=>{
                return(
                  <SearchCard 
                    key={id}
                    title={name}
                    mw={mw}
                    description={description}
                    />
                );
              })}
              </div>
        </div>
    </div>
  )
}
