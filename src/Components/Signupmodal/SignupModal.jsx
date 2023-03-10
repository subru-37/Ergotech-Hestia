import React,{useContext} from 'react';
import { ThemeContext } from '../../App';
import Modal from 'react-modal';
import './SignupModal.css';
import City from '../../Assets/City.png';
import TextField from '@mui/material/TextField';
import { 
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../firebase'

export default function SignupModal() {
  
  const {user,setUser,signup,setSignup,auths,setAuth,width1} = useContext(ThemeContext);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  }); 
  const handleSubmit = async (event) =>{ 
    event.preventDefault();
      try { 
        const user = await createUserWithEmailAndPassword(
          auth,
          auths.email,
          auths.pass
        );
      console.log(user);
      setAuth((preValue)=>{
        return({
          ...preValue,
          signedin:true
        });
      }) 
      setSignup(false)
     } catch(error) {
      console.log(error.message);
    }
    };
   
    function handleChange(event) {
        const { name, value } = event.target;
        // console.log(name,value);
        setAuth((preValue) => {
          return {
            ...preValue,
            [name]: value
          };
        }
        );
      }
    // let subtitle;
  const customStyles = {
    content: {
      top: width1>900? '54%':'52%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
    //   marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      minWidth:'80vw',
      minHeight:'85vh',
      display:'flex',
      alignItems:'center',
      justifyContent:'space-around',
      background: width1<1200 ? 'transparent' : 'white',
      border:width1<1200 ? 'none' : '1px solid rgb(204, 204, 204)',
       },
    overlay: {
        zIndex:'1000',

    }
  };
//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = '#f00';
//   }
  return (

    <div>
    <Modal
        closeTimeoutMS={100}
        shouldFocusAfterRender={true}
        shouldCloseOnOverlayClick={true}
        isOpen={signup && (!auths.signedin)}
        // onAfterOpen={afterOpenModal}
        onRequestClose={()=>(setSignup(false))}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={()=>(setValue(false))}>close</button> */}
        <div className='signup-modal'>
            <div className='image'>
                <img src={City} alt='' style={{width: '460px',height: '360px',display: width1>1200?'block':'none'}}></img>
            </div>
            <div className='signupform'>
                <div className='tempdiv-signup'>
                  <h2 style={{margin:'10px 0'}}>Sign up</h2>
                <p style={{marginBottom:'10px',fontSize:'15px'}}>Let's get started with Hestia!</p>
                <form className='formbox' onSubmit={handleSubmit} method='post'>
                <TextField 
                name='name'
                required
                autoComplete='off'
                value={auths.name}
                onChange={handleChange} 
                sx={{
                    width: '85%',
                    margin: '0 0 10px 0',
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
                name='email'
                required
                autoComplete='off'
                value={auths.email}
                type="email"
                onChange={handleChange} 
                sx={{
                    width: '85%',
                    margin: '0 0 10px 0',
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
                label="Email" />
                {/*<TextField 
                name='acctype'
                required
                autoComplete='off'
                value={auths.acctype}
                onChange={handleChange} 
                sx={{
                    width: '85%',
                    margin: '0 0 10px 0',
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
              label="Account Type" /> */}
                <TextField 
                name='pass'
                required
                autoComplete='off'
                value={auths.pass}
                type='password'
                onChange={handleChange} 
                sx={{
                    width: '85%',
                    margin: '0 0 10px 0',
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
                label="Password" />
                <TextField 
                name='confirmpass'
                required
                autoComplete='off'
                value={auths.confirmpass}
                type='password'
                onChange={handleChange} 
                sx={{
                    width: '85%',
                    margin: '0 0 10px 0',
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
                label="Confirm Password" />
                <button name='signedin' className='Button'><p style={{fontFamily:'Inter',}}>Sign up!</p></button>
                <button type='submit' style={{border:'none',background:'transparent',cursor:'pointer',margin:'10px 0'}}><p style={{fontFamily:'Inter'}}>Already have an account? Log in</p></button>
                </form>
                </div>
            </div>
        </div>
      </Modal>
    </div>
  )
}
