import React,{useContext} from 'react';
import { ThemeContext } from '../../App';
import Modal from 'react-modal';
import './SignupModal.css';
import City from '../../Assets/City.png';
import TextField from '@mui/material/TextField';
const customStyles = {
    content: {
      top: '53%',
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

export default function SignupModal() {
    function handleSubmit(event){
        setAuth({
            name:'',
            email:'',
            acctype:'',
            pass:'',
            confirmpass:'',
            signedin: true
          })
        setValue(false)
        event.preventDefault();
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
                <img src={City} alt='' style={{width: '400px',height: '300px'}}></img>
            </div>
            <div className='signupform'>
                <div className='tempdiv'>
                  <h2>Sign up</h2>
                <h5>Let's get started with Hestia!</h5>
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
                InputProps={{style: {color:'black'}}}
                InputLabelProps={{
                  style: { color:'black'},
                }}
                variant='outlined'
                label="Name" 
                id="outlined-basic"/>
                <TextField 
                name='email'
                required
                autoComplete='off'
                value={auth.email}
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
                InputProps={{style: {color:'black'}}}
                InputLabelProps={{
                  style: { color:'black'},
                }}
                variant='outlined'
                label="Email" 
                id="outlined-basic"/>
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
                InputProps={{style: {color:'black'}}}
                InputLabelProps={{
                  style: { color:'black'},
                }}
                variant='outlined'
                label="Account Type" 
                id="outlined-basic"/>
                <TextField 
                name='pass'
                required
                autoComplete='off'
                value={auth.pass}
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
                InputProps={{style: {color:'black'}}}
                InputLabelProps={{
                  style: { color:'black'},
                }}
                variant='outlined'
                label="Password" 
                id="outlined-basic"/>
                <TextField 
                name='confirmpass'
                required
                autoComplete='off'
                value={auth.confirmpass}
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
                InputProps={{style: {color:'black'}}}
                InputLabelProps={{
                  style: { color:'black'},
                }}
                variant='outlined'
                label="Confirm Password" 
                id="outlined-basic"/>
                <button name='signedin' className='Button'>Sign up</button>
                <button style={{border:'none',background:'transparent',cursor:'pointer',margin:'10px 0'}}>Already have an account? Log in</button>
                </form>
                </div>
            </div>
        </div>
      </Modal>
    </div>
  )
}
