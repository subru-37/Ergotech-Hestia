import React from 'react'
import {useContext} from 'react';
import { ThemeContext } from '../../App';
import Modal from 'react-modal';
import TextField from '@mui/material/TextField';
import './SigninModal.css'
import { 
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../firebase'

export default function SigninModal() {

  const {wrongpass,setWrongPass,setUser,signin,setSignin,auths,setAuth,width1} = useContext(ThemeContext);
  React.useEffect(()=>{
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    }); 
  })
    const handleSubmit = async (event) => {
      
      event.preventDefault();
      try {  
        const user = await signInWithEmailAndPassword(
          auth,
          auths.email,
          auths.pass
        );
        console.log(user);
        setWrongPass(false)
        setAuth((preValue)=>{
          return({
            ...preValue,
            signedin:true
          });
        }) 
        setSignin(false)
        } catch(error) {
          console.log(error.message);
          setWrongPass(true)
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
        isOpen={signin && (!auths.signedin)}
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
                <form className='formbox' onSubmit={handleSubmit} method='post'>
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
                        border: wrongpass? '3px solid red': '1px solid #0C4271',
                        color:'black'
                      },
                      '&.Mui-focused fieldset': {
                        border: '1px solid #0C4271',
                        color: 'black'
                      },
                    },
                    '& .MuiOutlinedInput-root:hover':{
                      '& fieldset':{
                        border: wrongpass? '3px solid red': '1px solid #0C4271',
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
                {wrongpass ? <div><p>Wrong password or Email, please try again</p></div> : null}
                <button type='submit' name='signedin' className='Button'><p style={{fontFamily:'Inter'}}>Sign in!</p></button>
                </form>
                </div>
            </div>
            <div></div>
        </div>
      </Modal>
    </div>
  )
}
