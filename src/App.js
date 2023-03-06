import React,{useState,createContext} from 'react';
import './App.css';
import Landing from './Pages/Landing/Landing';
import SignupModal from './Components/Signupmodal/SignupModal';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Searcher from './Pages/Searcher/Searcher';
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
        <Navbar/>
        <SignupModal/>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/Searcher' element={<Searcher/>}></Route>
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
