

import {React, useState} from 'react'

export default function Crud() {

    const [name,setname]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
     const[data,setdata]=useState([]);
     const[flag,setflag]=useState(true);
     const[index,setIndex]=useState(0);


    const sub=()=>{
        let x=name;
        let y=email;
        let z=password;

        if(x==""){
            alert("Please enter your name");
            return false;
        }
        else{
            console.log(x);
        }
        if(y==""){
            alert("Please enter your Email");
            return false;
        }
        else{
            console.log(y);
        }
        if(z==""){
            alert("Please enter your password");
            return false;
        }
        else{
            const person={
                "name":x,
                "email":y,
                "password":z,
            }
    
              data.push(person);
              console.log(data);
              setname("");
              setemail("");
              setpassword("");
        }

      
    }
    
     const del=(index)=>{
          setdata(data.filter((val,ind)=>index!==ind));
     }


     const update=(value,index)=>{
         setname(value.name);
         setemail(value.email);
         setpassword(value.password);
         setIndex(index);
         setflag(false);



     }

     const edit=()=>{
        console.log(index);
        if(name==""){
            alert("Please enter your name");
            return false;
        }
        else{
           console.log(name);
        }

        if(email==""){
            alert("Please enter your email");
            return false;
        }
        else{
           console.log(email);
        }

        if(password==""){
            alert("Please enter your password");
            return false;
        }
        else{
            setdata(data.map((val,ind)=>{
                console.log(val);
                return(
                    ind !== index ? val : {name:name, email:email, password:password}
                );
               
            }));
            setname("");
            setemail("");
            setpassword("");
            setflag(true);
        }

      
     }

  return (
    <>
      
      <div style={{width:"100% cover",textAlign:"center",margin:"20px auto"}} className="container">
          <h2 style={{textTransform:"capitalize"}}>Please fill the form</h2>
      <form action='#'>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name:</label>
    <input placeholder='Enter Your Name'   type="text" required="required" value={name} onChange={(e)=>setname(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
    <input  placeholder='Enter Your Email'   type="email" required="required" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
    <input placeholder='Enter Your Password'  type="password" required="required" value={password}    onChange={(e)=>setpassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>
  
  
    {flag? <button onClick={sub} type="submit" className="btn btn-primary">Submit</button> 
    :
    <button onClick={edit} type="submit" className="btn btn-info">Update</button> 

  }
</form>
      </div>



      <div  style={{width:"100%",textAlign:"center",margin:"50px auto"}} className="show">
          <h3>Data</h3>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th colSpan="2" scope="col">Update && Delete</th>

    </tr>
  </thead>
  <tbody>
      {data.map((value,index)=>{
          return(
           <tr key={index}>
           <th scope="row">{index+1}</th>
           <td>{value.name}</td>
           <td>{value.email}</td>
           <td>{value.password}</td>
           <td><button onClick={()=>del(index)} className='btn btn-danger'>Delete</button></td>
           <td><button onClick={()=>update(value,index)} className='btn btn-primary'>update</button></td>
         </tr>
          );
      })}
    
   
  </tbody>
</table>
      </div>
      
    
    
    </>
  )
}
