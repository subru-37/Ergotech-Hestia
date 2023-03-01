import React,{useState,createContext} from 'react';
import './App.css';
import Landing from './Pages/Landing/Landing';
import SignupModal from './Components/Signupmodal/SignupModal';
export const ThemeContext = createContext();
function App() {
  const [value,setValue] = useState(false);
  const [auth,setAuth] = useState({
    name:'',
    email:'',
    acctype:'',
    pass:'',
    confirmpass:'',
    signedin: false
  });
  // useEffect(()=>{
  //   console.log(auth)
  // },[auth])
  return (
    <div className="App">
      <ThemeContext.Provider value={{value,setValue,auth,setAuth}}>
        <Landing/>
        <SignupModal/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
