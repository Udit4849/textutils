import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/navbar';
import TextForm from './components/textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,        //React Router Dom quick start
  Route,
  Routes,
} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light");        //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  
  const showalert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
      
    })
   setTimeout(() => {
    setAlert(null);
   }, 1500);
  }


  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("Dark Mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showalert("Light Mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    <Router>
    <Navbar title = "Textutils" mode = {mode} toggleMode = {toggleMode} />
    <Alert alert = {alert}/>
    <div className="container my-3">
        <Routes>
        <Route exact path="/About" element={<About/>} >
          </Route>
           <Route exact path="/" element={<TextForm showalert={showalert} heading="Enter your text to Analyse below" mode={mode}/> }>
            </Route> 
        </Routes>  
    </div>
     </Router> 
    </>
  );
}

export default App;
