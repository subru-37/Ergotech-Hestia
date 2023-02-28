import React,{useContext} from 'react';
import { ThemeContext } from '../../App';
import Modal from 'react-modal';
import './SignupModal.css';
import City from '../../Assets/City.png';
import TextField from '@mui/material/TextField';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
    //   marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      minWidth:'50vw'
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
            confirmpass:''
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
        isOpen={value}
        // onAfterOpen={afterOpenModal}
        onRequestClose={()=>(setValue(false))}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={()=>(setValue(false))}>close</button> */}
        <div className='modal'>
            <div className='image'>
                <img src={City} alt='' style={{width: '350px',height: '250px'}}></img>
            </div>
            <div className='signupform' style={{minWidth:'40%'}}>
                <h1 style={{margin:'10px 0'}}>Sing up</h1>
                <h5 style={{margin:'0 0 10px 0'}}>Let's get started with Hestia!</h5>
                <form className='formbox' method='post'>
                <TextField 
                name='name'
                required
                autoComplete='off'
                value={auth.name}
                onChange={handleChange} 
                sx={{
                    width: '100%',
                    margin: '0 0 15px 0',
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
                    width: '100%',
                    margin: '0 0 15px 0',
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
                    width: '100%',
                    margin: '0 0 15px 0',
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
                    width: '100%',
                    margin: '0 0 15px 0',
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
                    width: '100%',
                    margin: '0 0 15px 0',
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
                <button onClick={handleSubmit}>Sign up</button>
                </form>
            </div>
        </div>
      </Modal>
    </div>
  )
}
