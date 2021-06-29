// RegisterEvent page form
import React , {useState} from 'react'
import {InputBox} from "../components/Common/Container/Register_Event/Input/input.compnent";

 
export const RegisterEvent = () => {
  
  const[viewerRegistration,setViewerRegistration]=useState({
    userName:"",
    EmailId:"",
    Semester:"",
    department:"",
    collegeName:"",
    desc:"",
  });

  const handleSubmit = (e) =>{

      e.preventDefault();

      setViewerRegistration({
        userName:'',
        EmailId:'',
        Semester:'',
        department:'',
        collegeName:'',
        desc:''
      })

  }

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setViewerRegistration({[name]:value})

  }

  return(
    <div>
        <div className="container text-center my-32">
          <h1 className="text-5xl">Get Ready to Explore ?</h1>
        </div>
    
        <div className="container bg-white border-4 w-1/3 p-4 rounded mx-auto my-16">
          <form onSubmit={handleSubmit} >
              <InputBox label="Enter Your Name" name="userName" placeholder="John Doe" value={viewerRegistration.userName} onChange={handleChange}/>
              <InputBox label="Email Id" name="EmailId" placeholder="emailaddress@gmail.com" value={viewerRegistration.EmailId} onChange={handleChange}/>
              <InputBox label="Semester" name="Semester" placeholder="Current Sem" value={viewerRegistration.Semester} onChange={handleChange} /> 
              <InputBox label="Department" name="department" placeholder="Department" value={viewerRegistration.department} onChange={handleChange} />
              <InputBox label="College Name" name="college" placeholder="College Name" value={viewerRegistration.collegeName} onChange={handleChange} />
              <InputBox label="How did you hear about NXT.Tech ?"  name="desc" value={viewerRegistration.desc} onChange={handleChange}/>
            <button type="submit" className="w-full h-12 px-4 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-md focus:shadow-outline hover:bg-indigo-800">Submit</button>          
          </form>

        </div>
    </div>
  )
};

export default RegisterEvent;
