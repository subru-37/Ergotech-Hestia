import React,{useState,createContext} from 'react';
import './App.css';
import { AuthProvider } from './Components/contexts/AuthContext';
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
    proffessional:false
  })
  React.useEffect(()=>{
    console.log(filters)
  },[filters])
  return (
    
    <AuthProvider> 
    <div className="App">
      <ThemeContext.Provider value={{value,setValue,auth,setAuth,search,setSearch,filters,setFilters}}>
        <Navbar/>
        <SignupModal/>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/Searcher' element={<Searcher/>}></Route>
        </Routes>
      </ThemeContext.Provider>
      </div></AuthProvider>
  );
}

export default App;
