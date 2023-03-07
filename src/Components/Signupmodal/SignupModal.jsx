import React,{useContext, useRef, useState} from 'react';
import { ThemeContext } from '../../App';
import Modal from 'react-modal';
import './SignupModal.css';
import { useAuth } from '../contexts/AuthContext';
import City from '../../Assets/City.png';
import TextField from '@mui/material/TextField';

const customStyles = {
    content: {
      top: '54%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
    //   marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      minWidth:'80vw',
      minHeight:'85vh',
      display:'flex',
      alignItems:'center',
      justifyContent:'space-around'
    },
    overlay: {
        backgroundColor: 'transparent'
    }
  };
const emailRef = useRef()
const passwordRef = useRef()
const passwordConfirmedRef = useRef()
const[error,setError] = useState('')
const [loading,setLoading] = useState(false)
export default function SignupModal() {
  const { signup } = useAuth()
     async function handleSubmit(event){
        event.preventDefault();
        if(passwordRef.current.value !== 
          passwordConfirmedRef.current.value){
            return setError("Passwords Do Not Match!")
          }

          try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
          } catch {
            setError("Failed to create account")
          }
          setLoading(false)

         /* setAuth({
            name:'',
            email:'',
            acctype:'',
            pass:'',
            confirmpass:'',
            signedin: true
          })
        setValue(false) */
    }
        
    function handleChange(event) {
        const { name, value } = event.target;
        console.log(name,value);
        setAuth((preValue) => {
          return {
            ...preValue,
            [name]: value
          };
        }
        );
      }
    // let subtitle;
  const {value,setValue,auth,setAuth} = useContext(ThemeContext);
//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = '#f00';
//   }
  return (
    <div>
    <Modal
        closeTimeoutMS={100}
        shouldFocusAfterRender={true}
        shouldCloseOnOverlayClick={false}
        isOpen={value && (!auth.signedin)}
        // onAfterOpen={afterOpenModal}
        onRequestClose={()=>(setValue(false))}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={()=>(setValue(false))}>close</button> */}
        <div className='modal'>
            <div className='image'>
                <img src={City} alt='' style={{width: '460px',height: '360px'}}></img>
            </div>
            <div className='signupform'>
                <div className='tempdiv'>
                  <h2 style={{margin:'10px 0'}}>Sign up</h2>
                  {error && <h4>{error}</h4>}
                <p style={{marginBottom:'10px',fontSize:'15px'}}>Let's get started with Hestia!</p>
                <form className='formbox' onSubmit={handleSubmit} method='post'>
                <TextField 
                name='name'
                required
                autoComplete='off'
                value={auth.name}
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
                value={auth.email}
                type="email"
                ref={emailRef}
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
                <TextField 
                name='acctype'
                required
                autoComplete='off'
                value={auth.acctype}
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
                label="Account Type" />
                <TextField 
                name='pass'
                required
                autoComplete='off'
                value={auth.pass}
                type='password'
                ref={passwordRef}
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
                value={auth.confirmpass}
                type='password'
                ref={passwordConfirmedRef}
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
                <button name='signedin' className='Button' disabled={loading}><p style={{fontFamily:'Inter',}}>Sign up!</p></button>
                <button style={{border:'none',background:'transparent',cursor:'pointer',margin:'10px 0'}}><p style={{fontFamily:'Inter'}}>Already have an account? Log in</p></button>
                </form>
                </div>
            </div>
        </div>
      </Modal>
    </div>
  )
}
