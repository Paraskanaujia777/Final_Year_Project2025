import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
    const navigate = useNavigate()

    const [email ,setEmail]= useState("");
    const [password ,setPassword]= useState("");
    const [firstName ,setFirstName]= useState("");


    const signIn = async  ()=>{

        let x = await fetch("http://localhost:4000/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',

            },
        })
        x = await x.json();
        // console.log(x)
        let name =x.firstName
        let name2 =x.lastName
        setFirstName(name)
        console.log(name)


        if(x.email){
            alert(` ${name} ${name2} user found`)

        }
        else{
            alert('enter valid argument')
        }
    


    }



    return (
        <>
            <div className="d-flex flex-column  col-6 mx-auto my-5 ">
                <h1 className="text-center mb-4 ">SignIn</h1>
                <form action="">
                    <div className="mb-3 d-flex">
                        <label htmlFor="exampleFormControlInput1" className="form-label col-3 ">Email address :</label>
                        <input type="email" onChange={(e)=> setEmail(e.target.value)} className="form-control col-3 " id="exampleFormControlInput1" placeholder="Email" />
                    </div>
                    <div className="mb-3 d-flex">
                        <label htmlFor="exampleFormControlInput1" className="form-label col-3 ">Password :</label>
                        <input type="password" onChange={(e)=> setPassword(e.target.value)} className="form-control col-3 " id="exampleFormControlInput2" placeholder="password" />
                    </div>
                    <button type="submit" onClick={signIn} className="btn btn-primary col-3 m-auto">Submit</button>

                </form>

            </div>
        </>
    )
}

export default Signin