import React,{useContext, useState} from 'react';
import { ThemeContext } from '../../App';
import Modal from 'react-modal';
import './SignupModal.css';
import { 
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import City from '../../Assets/City.png';
import TextField from '@mui/material/TextField';
//import CloseIcon from '@mui/icons-material/Close';
//import { useNavigate } from "react-router-dom";
import { auth } from '../../firebase'


export default function SignupModal() {
  
  const [registerEmail,setRegisterEmail] = useState('')
  const [registerPassword,setRegisterPassword] = useState('')
  /*const [loginEmail,setLoginEmail] = useState('')
  const [loginPassword,setLoginPassword] = useState('')
  const navigate = useNavigate();*/
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
 

  /*async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmedRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate('/searcher');
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }*/
  /*const handleLogin = (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigate('/searcher')
     const userEmail = email
      
    })
    .catch((error) => {
      setError(true)
    });
  }
*/
    /* handleSubmit(event){
        setAuth({
            name:'',
            email:'',
            acctype:'',
            pass:'',
            confirmpass:'',
            signedin: true
          })
        setSignup(false)
        event.preventDefault();
    } 
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
      }*/
    // let subtitle;
  const {width1} = useContext(ThemeContext);
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
        isOpen={(!auth.signedin)}
        // onAfterOpen={afterOpenModal}
       // onRequestClose={()=>(setSignup(false))}
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
                <form className='formbox' onSubmit={register} method='post'>
                <TextField 
                name='name'
                required
                autoComplete='off'
                value={auth.name}
                /*onChange={handleChange} */
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
                type="email"
                
                onChange={(event)=> {
                  setRegisterEmail(event.target.value);
                }} 
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
              
                /*onChange={handleChange} */
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
                type='password'
                onChange={(event)=> {
                  setRegisterPassword(event.target.value);
                }} 
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
                type='password'
             
                /*onChange={handleChange} */
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
                <button name='signedin' className='Button' onClick = {register}><p style={{fontFamily:'Inter',}}>Sign up!</p></button>
                <button type='submit' style={{border:'none',background:'transparent',cursor:'pointer',margin:'10px 0'}}><p style={{fontFamily:'Inter'}}>Already have an account? Log in</p></button>
                </form>
                <h3>Logout</h3>
                </div>
            </div>
        </div>
      </Modal>
    </div>
  )
}
