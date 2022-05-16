import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';

const Login = () => {
  // const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
});

console.log(user);

  const setdata = (e) => {
    // console.log(e.target.value);
    const {name,value} = e.target;

    setUser(() => {
      return {
        ...user,
        [name]: value
      }
    })
  }

  // const { idS
  return (
    <>
      <form className='mt-4'>
        <div class="row mb-3 col-4">
          <label htmlFor="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" name="email" onChange={setdata} value={user.email} class="form-control" id="email" />
          </div>
        </div>
        <div className="row mb-3 col-4">
          <label htmlFor="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" name="password" onChange={setdata} value={user.password} class="form-control" id="password" />
          </div>
        </div>
        <NavLink to="/" type="submit" className="btn btn-primary">Login</NavLink>
      </form>
  </>
  )
}

export default Login