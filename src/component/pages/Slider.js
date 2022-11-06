import {React,useState,useRef} from "react";
import pic from "../../images/laptop2.png";
import audio from "../../audio/audio.mp3";
import musics from "../../images/musics.png"

export default function Slider() {
  const [selectImg,setSelectImg] = useState('')
  const [posX, setPosX] = useState(0)
  const [posY, setPosY] = useState(0)
  const [scale, setScale] = useState(1)
  const audioElem = useRef()
   const imgClickHandler = (event)=>{
     setSelectImg(event.target.dataset.name)
    audioElem.current.pause()
  }
const audioClickHandler = (event)=>{
  setSelectImg(event.target.dataset.name) 
}
const musicHndler =()=>{
   audioElem.current.play()
}
const nextArowHandler =()=>{
     setSelectImg("pic")
     audioElem.current.pause()
  }
const preArowHandler =()=>{
     setSelectImg("audio")
     audioElem.current.pause()
  }
 
  const handelMove = (event)=>{
       setPosX(event.clientX - event.target.offsetLeft)
     setPosY(event.clientY - event.target.offsetTop)
     setScale(2)
 
   }
   return (
    <div className="col-12 col-md-12 col-lg-5 col-xl-4">
    <div className="slide-wrapper">
      <audio style={{display:"none"}} src={audio} ref={audioElem}></audio>
      <div className="slide">
        <i className="fa-solid fa-chevron-right arrow-main-r" onClick={nextArowHandler}></i>
        <div className="item-slide"  onMouseMove={handelMove} onMouseLeave={()=>setScale(1)}>
          {selectImg === "pic"|| '' ? <img src={pic} alt="pic" style={{transformOrigin : `${posX}px ${posY}px`,transform : `scale(${scale})`} }/> : <img src={musics} alt="pic" onClick={musicHndler} />  }
         </div>
        <i className="fa-solid fa-chevron-left arrow-main-l" onClick={preArowHandler}></i>
      </div>
      <div className="slide-buttom">
        <i className="fa-solid fa-chevron-right arrow-bottom-r" onClick={nextArowHandler}></i>
        <div className="img-slide">
          <img src={pic} alt="pic" data-name="pic" onClick={imgClickHandler}/>
        </div>
        <div className="audio-slide">
          <img src={musics} alt="audio" data-name="audio" onClick={audioClickHandler}/>
         </div>
        <i className="fa-solid fa-chevron-left arrow-bottom-l" onClick={preArowHandler}></i>
      </div>
    </div>
    </div>
  );
}
