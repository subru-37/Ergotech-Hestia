import React,{useState,createContext} from 'react';
import './App.css';
import Landing from './Pages/Landing/Landing';
import SignupModal from './Components/Signupmodal/SignupModal';
import SigninModal from './Components/Signinmodal/SigninModal';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Searcher from './Pages/Searcher/Searcher';
export const ThemeContext = createContext();
function App() {
  const [signin,setSignin] = useState(false);
  const [signup,setSignup] = useState(false);
  const [width1,setWidth] = useState(window.innerWidth);

  const [auth,setAuth] = useState({
    name:'',
    email:'',
    acctype:'',
    pass:'',
    confirmpass:'',
    signedin: false
  });
  const [search,setSearch] = useState({location:'',name:''})
  const [filters, setFilters] = useState({
    sliderValue:[1000,2000],
    wifi:false,
    ac: false,
    food:false,
    kitchen:false,
    pets:false,
    abathroom:false,
    sdeposit:false,
    curfew:false,
    hotwater:false,
    balcony:false,
    furnished:false,
    wheelchair:false,
    smoking:false,
    drinking:false,
    student:false,
    proffesional:false
  })
  React.useEffect(()=>{
    window.addEventListener('resize',myFunction)
    function myFunction(e){
      setWidth(window.innerWidth)
    }
    return() => {
      window.removeEventListener('resize',myFunction)
    }
  },[width1])
  return (
    <div className="App">
      <ThemeContext.Provider value={{signup,signin,setSignin,setSignup,auth,setAuth,search,setSearch,filters,setFilters,width1}}>
        <Navbar/>
        <SignupModal/>
        <SigninModal/>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/Searcher' element={<Searcher/>}></Route>
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
