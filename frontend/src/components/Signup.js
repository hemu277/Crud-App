import React, { useContext, useState } from 'react'
import { NavLink , useNavigate} from 'react-router-dom'
import { adddata } from './context/ContextProvider';

const Signup = () => {

  const { udata, setUdata } = useContext(adddata);

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""

  });
  
  const setdata = (e) => {
    console.log(e.target.value); 
    const {name,value} = e.target;
    setUser((user)=>{
      return{
       ...user, 
        [name]:value
      }
      })
      }


  const handleSubmit = async(e) => {
      e.preventDefault();
 
      const { name, email, password } = user;

      const res = await fetch("/signup", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              name, email, password
          })
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 404 || !data) {
          console.log("error");
          alert("error");

      } else {
          navigate("/login");
          alert("data added");
          console.log("data added");

      }
  }

  return (
    <div className="container">
      <NavLink to="/">home</NavLink>
      <form className="mt-4">
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputName" class="form-label">Name</label>
          <input type="name" name="name" onChange={setdata} value={user.name} class="form-control" id="exampleInputName" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" name="email" onChange={setdata} value={user.email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" name="password" onChange={setdata} value={user.password} class="form-control" id="exampleInputPassword1" />
        </div>

        <button onClick={handleSubmit} class="btn btn-primary">Register</button>
       </form>
      </div>
  )
}

export default Signup