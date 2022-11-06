import { React,useEffect, useState, useRef } from "react";
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {errorHandler} from "./errorHandler"
 
export default function Form() {
  // states ======================================
  const [dateError, setDataError] = useState(false)
  const [data, setData] = useState({
    name:'',
    family:'',
  })
  const [error, setError] = useState({})
  const [toch, setToch] = useState({
    name: '',
    family: '',
  })
  // END OF states ======================================
  
   useEffect(()=>{
     setError(errorHandler(data))
   },[data,toch,dateError])

  const changeHandler = (event)=>{
    setData({...data,[event.target.name] : event.target.value})
      }
      const tochHandler = (event)=>{
        setToch( {...toch,[event.target.name] : true})
      }
      const submitHandler = (event)=>{
        event.preventDefault()
        if(Object.keys(error).length === 0 && datePickerRef.current.children[0].value){
          toast.success('ثبت نام با موفقیت انجام شد')
        }else{
          toast.error('مقادیر داده شده معتبر نیست')
          setToch({...toch,
            name:true,
            family:true,
          })
          if(datePickerRef.current.children[0].value){
            setDataError(false)
          }else{
            setDataError(true)
          }
        }
      }
// datePitcker=====================================================
const [value, setValue] = useState();
const datePickerRef = useRef();
function handleChange(value) {
   setDataError(false)
   setValue(value);
}

return (
  <div className="col-12 col-md-12 col-lg-7 col-xl-8 form-wrapper">
   <form className='form-submit '>
   <div className="d-flex justify-content-center gap-4 mt-5 form-item-wrapper">
   <div className='form-item m-e-3 '>
     <input type="text" name='name' value={data.name} placeholder='نام...' onFocus={tochHandler} onChange={changeHandler} />
     <p>{error.name && toch.name && error.name} </p>
     </div>
     <div className='form-item '>
     <input type="text" name='family' value={data.family} placeholder='نام خانوادگی...' onFocus={tochHandler} onChange={changeHandler} />
     <p> {error.family && toch.family && error.family}</p>
     </div>
     </div>
     <div className='form-item d-flex justify-content-center  mt-5'>
      <i className="fa-solid fa-calendar-days"></i>
      <div>     <div>
       <DatePicker
        placeholder="// تاریخ تولد"
        value={value}
        onChange={handleChange}
        minDate="1401-1-1"
        maxDate="1401-12-29"
        ref={datePickerRef}
        calendar={persian}
        locale={persian_fa}
       >
        <button
          style={{ margin: "5px",border:"none"}}
          onClick={() => datePickerRef.current.closeCalendar()}
        >
          close
        </button>
        </DatePicker>

      </div><p>{dateError && 'تاریخ تولد معتبر نیست'}</p></div> 

     </div>
     <div className='mt-4'>
       <button className='submit-btn' type='submit' onClick={submitHandler}>ارسال</button>
       </div>
     </form>
     <ToastContainer />
</div>
  )
}
