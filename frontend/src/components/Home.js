import React, { useEffect, useState, useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { adddata, deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider'

const Home = () => {


    const navigate = useNavigate()
    const [getuserdata, setUserdata] = useState([

    ]);
    console.log(getuserdata);

    const { udata, setUdata } = useContext(adddata);

    const { updata, setUPdata } = useContext(updatedata);

    const { dltdata, setDLTdata } = useContext(deldata);

    const getdata = async (e) => {



        const res = await fetch("/getdata", {
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
            navigate("/");
            setUserdata(data)
            console.log("get data");

        }
    }


    useEffect(() => {
        getdata();
    }, [])


    const deleteuser = async (id) => {

        const res2 = await fetch(`/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            setDLTdata(deletedata)
            getdata();
        }

    }


    return (
        <div className='mt-5'>
            <div className='container'>
                <div className='add_btn mt-2 mb-2'>
                    <NavLink to="/signup" className='btn btn-primary'>Add data</NavLink>
                </div>

                <table class="table">
                    <thead>
                        <tr className="table-success">
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            getuserdata.map((element, id) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{id + 1}</th>
                                            <td>{element.name}</td>
                                            <td>{element.email}</td>
                                            <td>{element.password}</td>
                                            <td className="d-flex justify-content-between">
                                                <NavLink to={`Update/${element._id}`}><button className='btn btn-primary'><i class="fa-solid fa-pen"></i></button></NavLink>
                                                <button className='btn btn-danger' onClick={() => deleteuser(element._id)}><i class="fa-solid fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    </>
                                )

                            })
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home