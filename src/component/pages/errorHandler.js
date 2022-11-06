export const errorHandler = (data)=>{
  const error = {}
    if(!data.name.trim()){
          error.name = 'نام معتبر نیست' 
    }else{
        delete error.name
    }
    if(!data.family.trim()){
          error.family = 'نام خانوادگی معتبر نیست' 
    }else{
        delete error.family
    }
    return error

}