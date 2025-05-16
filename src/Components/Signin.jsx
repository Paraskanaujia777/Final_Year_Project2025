// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Signin() {
    
//     const navigate = useNavigate();

//     const [email ,setEmail]= useState("");
//     const [password ,setPassword]= useState("");
//     const [name ,setName]= useState("");


//     const signIn = async  (e)=>{
//         e.preventDefault();
        

//         let x = await fetch("http://localhost:4000/login", {
//             method: 'post',
//             body: JSON.stringify({ email, password }),
//             headers: {
//                 'Content-Type': 'application/json',

//             },
//         })
//        const result = await x.json();
//         console.log(result);
//         // setName(result.firstName);
//         console.log(result.user.firstName);
//         localStorage.setItem('userData', JSON.stringify(result.user))
//         if(result.user.firstName){
//             alert(`Welcome Back ${result.user.firstName} ${result.user.lastName}`);
//             navigate('/');

//         }
//         else{
//             alert('enter valid argument')
//         }
    


//     }



//     return (
//         <>
//             <div className="d-flex flex-column  col-6 mx-auto my-5 ">
//                 <h1 className="text-center mb-4 ">SignIn</h1>
//                 <form onSubmit={signIn}>
//                     <div className="mb-3 d-flex">
//                         <label htmlFor="exampleFormControlInput1" className="form-label col-3 ">Email address :</label>
//                         <input type="email" onChange={(e)=> setEmail(e.target.value)} className="form-control col-3 " id="exampleFormControlInput1" placeholder="Email" />
//                     </div>
//                     <div className="mb-3 d-flex">
//                         <label htmlFor="exampleFormControlInput1" className="form-label col-3 ">Password :</label>
//                         <input type="password" onChange={(e)=> setPassword(e.target.value)} className="form-control col-3 " id="exampleFormControlInput2" placeholder="password" />
//                     </div>
//                     <button type="submit"  className="btn btn-primary col-3 m-auto">Submit</button>

//                 </form>

//             </div>
//         </>
//     )
// }

// export default Signin





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    setShowSuccess(false);
    setShowError(false);

    try {
      let x = await fetch("http://localhost:4000/login", {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await x.json();
      console.log(result);

      if (result?.user?.firstName) {
        localStorage.setItem("userData", JSON.stringify(result.user));
        setAlertMessage(`Welcome Back ${result.user.firstName} ${result.user.lastName}`);
        setShowSuccess(true);

        setTimeout(() => {
          navigate("/");
        }, 4000);
      } else {
        setAlertMessage("Enter valid credentials.");
        setShowError(true);
      }
    } catch (error) {
      console.log("error occurred:", error);
      setAlertMessage("Server error occurred. Please try again later.");
      setShowError(true);
    }
  };

  return (
    <>
      <div className="d-flex flex-column col-6 mx-auto my-5">
        <h1 className="text-center mb-4">SignIn</h1>

        {showSuccess && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <h4 className="alert-heading">Well done!</h4>
            <p>{alertMessage}</p>
            <hr />
            <p className="mb-0">Redirecting you to the homepage...</p>
            <button type="button" className="btn-close" onClick={() => setShowSuccess(false)} aria-label="Close"></button>
          </div>
        )}

        {showError && (
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error:</strong> {alertMessage}
            <button type="button" className="btn-close" onClick={() => setShowError(false)} aria-label="Close"></button>
          </div>
        )}

        <form onSubmit={signIn}>
          <div className="mb-3 d-flex">
            <label htmlFor="email" className="form-label col-3">Email address :</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control col-3" id="email" placeholder="Email" />
          </div>
          <div className="mb-3 d-flex">
            <label htmlFor="password" className="form-label col-3">Password :</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control col-3" id="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary col-3 m-auto">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Signin;
