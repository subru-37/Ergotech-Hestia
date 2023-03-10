import React from 'react'
import {useState, useContext} from 'react';
import { ThemeContext } from '../../App';
import Modal from 'react-modal';
import TextField from '@mui/material/TextField';
import './SigninModal.css'
import { 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from '../../firebase'
export default function SigninModal() {
  const [loginEmail,setLoginEmail] = useState('')
  const [loginPassword,setLoginPassword] = useState('')
  const [user, setUser] = useState({});
  
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

   /* function handleSubmit(event){
        setAuth({
            name:'',
            email:'',
            acctype:'',
            pass:'',
            confirmpass:'',
            signedin: true
          })
        setSignin(false)
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
  const {width1,Auth,setAuth, signin, setSignin} = useContext(ThemeContext);
  const customStyles = {
    content: {
      top: width1>900? '54%':'52%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
    //   marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      minWidth:'50vw',
      minHeight:'55vh',
      display:'flex',
      alignItems:'center',
      justifyContent:'space-around',
      background:'transparent',
      border:'none',
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
        isOpen={signin && (!Auth.signedin)}
        // onAfterOpen={afterOpenModal}
        onRequestClose={()=>(setSignin(false))}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={()=>(setValue(false))}>close</button> */}
        <div className='signin-modal'>
            <div className='signinform'>
                <div className='tempdiv-signin'>
                  <h2 style={{margin:'10px 0'}}>Sign in</h2>
                <form className='formbox' onSubmit={login} method='post'>
                <TextField 
                name='email'
                required
                autoComplete='off'
                type="email"onChange={(event) => {
                  setLoginEmail(event.target.value);
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
                name='pass'
                required
                autoComplete='off'
                type='password' onChange={(event) => {
                  setLoginPassword(event.target.value);
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
                <button type='submit' name='signedin' className='Button'><p style={{fontFamily:'Inter'}} onClick = {login}>Sign in!</p></button>
                </form>
                {/* <h4> User Logged In: </h4>
                  {user.email} {user?.email} aanu sherikkum */}
                    <button onClick={logout}> Sign Out </button>
                </div>
            </div>
        </div>
      </Modal>
    </div>
  )
}
