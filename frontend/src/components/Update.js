import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { updatedata } from './context/ContextProvider'

const Update = () => {

  // const { updata, setUPdata } = useContext(updatedata); 
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""

  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setUser((user) => {
      return {
        ...user,
        [name]: value
      }
    })
  }


  const { id } = useParams("");
  console.log(id);

  const getdata = async () => {

    const res = await fetch(`/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      console.log("error");

    } else {
      setUser(data)
      console.log("getdata");

    }
  }


  useEffect(() => {
    getdata();
  }, []);

  const updateuser = async (e) => {
    e.preventDefault();

    const { name, email, password } = user;

    const res2 = await fetch(`/updateuser/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, password
      })
    });

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("fill the data");
    } else {
      alert("data added");
      navigate("/");
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

        <button type="submit" onClick={updateuser} class="btn btn-primary">Update</button>
      </form>
    </div>
  )
}

export default Update