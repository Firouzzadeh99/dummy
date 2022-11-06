import {React,useState} from "react";
import Sidebar from "./component/sideBar/Sidebar";
import Home from "./component/pages/Home";
import "./App.css"
 import MobileMenue from "./component/pages/MobileMenue";
export default function App() {
  const [shown, setShown] = useState(true)
  const [mobileShown, setMobileShown] = useState(false)
  const handelClick = ()=>{
    if(shown){
      setShown(false) 
     }else{
      setShown(true)
    }
  }
  const handelMobileMenue =()=>{
    if(mobileShown){
       setMobileShown(false)
        }
  }
  const handelMobileMenueSow =()=>{
    if(mobileShown===false){
      setMobileShown(true)
    }
  }
  return (
    <>
      <div className="container-xxl wrapper-panel" onClick={handelMobileMenue}>
        <div className='row'>
          { mobileShown ? <MobileMenue mobileShown={mobileShown} /> : ''}
            {shown ? <Sidebar/> : '' }
           <div className={` col-sx-12${shown ? 'col-9' : 'col-12' } ${shown ? 'col-md-9' : 'col-md-12' } ${shown ? 'col-lg-10' : 'col-lg-12'} ${shown ? 'col-xl-10' : 'col-xl-12' } } wrapper-pages`}>
           <i className="fa-solid fa-bars mobile" onClick={handelMobileMenueSow}></i>
            <Home handelClick={handelClick}  />
            </div>
        </div>
      </div>
     </>
  );
}
