
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const addUser = async (e) => {
    e.preventDefault();
    setShowSuccess(false);
    setShowError(false);

    try {
      let response = await fetch("http://localhost:4000/signUp", {
        method: 'post',
        body: JSON.stringify({ firstName, lastName, email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (result?.user) {
        localStorage.setItem('userData', JSON.stringify(result.user));
        setShowSuccess(true);
        setTimeout(() => navigate('/'), 4000); // Redirect after showing success
      } else {
        setErrorMessage(result.message || "Signup failed. Please try again.");
        setShowError(true);
      }
    } catch (error) {
      console.log('error occurred:', error);
      setErrorMessage("User already exists or server error occurred.");
      setShowError(true);
    }
  };

  return (
    <>
      <div className="d-flex flex-column col-6 mx-auto my-5">
        <h1 className="text-center mb-4">SignUp</h1>

        {showSuccess && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <h4 className="alert-heading">Well done!</h4>
            <p>You successfully registered! This alert confirms your signup was successful.</p>
            <hr />
            <p className="mb-0">Redirecting you to the homepage...</p>
            <button type="button" className="btn-close" onClick={() => setShowSuccess(false)} aria-label="Close"></button>
          </div>
        )}

        {showError && (
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error:</strong> {errorMessage}
            <button type="button" className="btn-close" onClick={() => setShowError(false)} aria-label="Close"></button>
          </div>
        )}

        <form onSubmit={addUser}>
          <div className="mb-3 d-flex">
            <label htmlFor="firstName" className="form-label col-3">First Name:</label>
            <input type="text" className="form-control col-3" id="firstName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="mb-3 d-flex">
            <label htmlFor="lastName" className="form-label col-3">Last Name:</label>
            <input type="text" className="form-control col-3" id="lastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="mb-3 d-flex">
            <label htmlFor="email" className="form-label col-3">Email address:</label>
            <input type="email" className="form-control col-3" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3 d-flex">
            <label htmlFor="password" className="form-label col-3">Password:</label>
            <input type="password" className="form-control col-3" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button type="submit" className="btn btn-primary col-3 m-auto">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Signup;










































// import React from "react";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Signup() {

//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const navigate = useNavigate();

//     // const auth = localStorage.setItem('signupdata', JSON.stringify({ firstName, lastName, email, password }))

//     const addUser = async (e) => {

//         e.preventDefault();

//         try {
//             let x = await fetch("http://localhost:4000/signUp", {
//                 method: 'post',
//                 body: JSON.stringify({ firstName, lastName, email, password }),
//                 headers: {
//                     'Content-Type': 'application/json',

//                 },
//             });

//             const result = await x.json();
//             console.log(result.user.firstName);
//             localStorage.setItem('userData', JSON.stringify(result.user))
//             alert(result.message || "signup failed");
//             navigate('/');
//         } catch (error) {
//             console.log('error occured', error)
//             alert('user already exists')

//         }


//     }

//     // useEffect(() => 
//     //     { navigate("/") },[]
//     // );




//     return (
//         <>
//             <div className="d-flex flex-column  col-6 mx-auto my-5 ">
//                 <h1 className="text-center mb-4 ">SignUp</h1>

//                 <form onSubmit={addUser}>

//                     <div className="mb-3 d-flex">
//                         <label htmlFor="exampleFormControlInput1" className="form-label col-3 ">First Name :</label>
//                         <input type="text" className="form-control col-3 " id="exampleFormControlInput1" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
//                     </div>
//                     <div className="mb-3 d-flex">
//                         <label htmlFor="exampleFormControlInput2" className="form-label col-3 ">Last Name :</label>
//                         <input type="text" className="form-control col-3 " id="exampleFormControlInput2" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
//                     </div>
//                     <div className="mb-3 d-flex">
//                         <label htmlFor="exampleFormControlInput3" className="form-label col-3 ">Email address :</label>
//                         <input type="email" className="form-control col-3 " id="exampleFormControlInput3" placeholder="Email"
//                             onChange={(e) => setEmail(e.target.value)} />
//                     </div>
//                     <div className="mb-3 d-flex">
//                         <label htmlFor="exampleFormControlInput4" className="form-label col-3 ">Password :</label>
//                         <input type="password" className="form-control col-3 " id="exampleFormControlInput4" placeholder="password"
//                             onChange={(e) => setPassword(e.target.value)} />
//                     </div>

//                     <button type="submit" className="btn btn-primary col-3 m-auto">Submit</button>

//                 </form>




//             </div>

//         </>
//     )
// }

// export default Signup
