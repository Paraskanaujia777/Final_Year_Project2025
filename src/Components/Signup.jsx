import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    // const auth = localStorage.setItem('signupdata', JSON.stringify({ firstName, lastName, email, password }))

    const addUser = async (e) => {

        e.preventDefault();

        try {
            let x = await fetch("http://localhost:4000/signUp", {
                method: 'post',
                body: JSON.stringify({ firstName, lastName, email, password }),
                headers: {
                    'Content-Type': 'application/json',

                },
            });
            
            const result = await x.json();
            console.log(result.user.firstName);
            localStorage.setItem('userData', JSON.stringify(result.user))
            alert(result.message || "signup failed");
            navigate('/');
        } catch (error) {
            console.log('error occured', error)
            alert('user already exists')

        }


    }

    // useEffect(() => 
    //     { navigate("/") },[]
    // );




    return (
        <>
            <div className="d-flex flex-column  col-6 mx-auto my-5 ">
                <h1 className="text-center mb-4 ">SignUp</h1>

                <form onSubmit={addUser}>

                    <div className="mb-3 d-flex">
                        <label htmlFor="exampleFormControlInput1" className="form-label col-3 ">First Name :</label>
                        <input type="text" className="form-control col-3 " id="exampleFormControlInput1" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="mb-3 d-flex">
                        <label htmlFor="exampleFormControlInput2" className="form-label col-3 ">Last Name :</label>
                        <input type="text" className="form-control col-3 " id="exampleFormControlInput2" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="mb-3 d-flex">
                        <label htmlFor="exampleFormControlInput3" className="form-label col-3 ">Email address :</label>
                        <input type="email" className="form-control col-3 " id="exampleFormControlInput3" placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3 d-flex">
                        <label htmlFor="exampleFormControlInput4" className="form-label col-3 ">Password :</label>
                        <input type="password" className="form-control col-3 " id="exampleFormControlInput4" placeholder="password"
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type="submit"  className="btn btn-primary col-3 m-auto">Submit</button>

                </form>



            </div>

        </>
    )
}

export default Signup
