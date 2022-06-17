import '../css/signup.css'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import React, {useState} from 'react'

function SignUp(){
const [empId ,setEmpId] = useState("");
const [empName ,setEmpName] = useState("");
const [empsurname ,setEmpSurname] = useState("");
const [empEmail ,setEmpEmail] = useState("");
const [empPassword ,setPassword] = useState("");


    
const empregister=(e)=>{
e.preventDefault();


if (!empId || !empName || !empsurname || !empEmail || !empPassword){
 //   alert("no input must be empty");
    
    localStorage.setItem("Epmid", JSON.stringify(empId));
    localStorage.setItem("Empname", JSON.stringify(empName));

}
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var pwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  let employeeDetails={
     name:empName,
       surname:empsurname,
        email:empEmail,
        employeenumber:empId,
        password:empPassword
        
        
    };

   if(employeeDetails.employeenumber.length===""){
    alert("Enter Your Employee Number")
 }


   else if(employeeDetails.name.length>9){
       alert("Enter Your Name");
    
    
}else if(employeeDetails.surname.length>9){
       alert("Enter Your Surname")
    
    }
 else if (!employeeDetails.email.includes("@") || employeeDetails.email.length<15) {
        alert("Enter Your Email")
       }
       else if(!filter.test.email){
        alert('invalidemg')
       }
        
      else {
            let storedEmpolyeeDetails =new Array();
            let storedEmployeeUsers=JSON.parse(localStorage.getItem("user"));
            if(storedEmployeeUsers){
                storedEmpolyeeDetails=storedEmployeeUsers;
                storedEmpolyeeDetails.push(employeeDetails);
            }else{
                storedEmpolyeeDetails.push(employeeDetails);
            }
            localStorage.setItem("user",JSON.stringify(storedEmpolyeeDetails));
            window.Location='/Login';
        }
    };
    let history = useHistory();
    const Register =(()=>{
      history.push('/')
    });
 
    return(
        <div  className="container">
            <h3>Create Employee Account</h3>
            <input type="text" placeholder="Enter Employee Number" onChange={(event)=> setEmpId(event.target.value)} required />
        <input type="text" placeholder="Enter Employee Name" onChange={(event)=> setEmpName(event.target.value)}/>
            <input type="text" placeholder="Enter Employee Surname" onChange={(event)=> setEmpSurname(event.target.value)} />
<input type="email" placeholder="Enter Employee Email" onChange={(event)=> setEmpEmail(event.target.value)} />
<input className="file-upload-input" type="file" placeholder='upload picture'/>
<input type="password" placeholder="Create Password" />
<input type="password" placeholder="Repeat Password" />
<button className="btn" onClick={ Register}>Register</button>
<span>Already have account</span><span><Link to="/">Login</Link></span>
        </div>
        
    )
}
export default SignUp;