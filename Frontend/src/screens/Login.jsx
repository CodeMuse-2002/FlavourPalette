// import { useState } from "react";
// import{signIn} from "../services/user";
// import { toast } from 'react-toastify'
// import { Link, useNavigate } from 'react-router-dom'

// function Login() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   // get navigate function reference
//   const navigate = useNavigate()
//   const OnLogin = async () => {
//   // client side validation
//   // if (email.length == 0) {
//   //   toast.warning('Please enter email')
//   // } else if (password.length == 0) {
//   //   toast.warning('Please enter password')
//   // } else {
//   //   // call the login api and get the result
//   //   const result = await signIn({email, password})

//   //   // check if the result is successful
//   //   if (result.status === 'success') {

//   //     toast.success('welcome to the application')

//   //     // redirect to todo item list
//   //     navigate('/products/view')
//   //   } else {
//   //     toast.error(result.error)
//   //   }
//   // }
//   try {
//     const result = await signIn({ email, password });
//     console.log('Login Success:', result);
    
//     toast.success('Login successful!');
//     sessionStorage.setItem("customerId", result.customerId)
//     sessionStorage.setItem("user", JSON.stringify(result));
    
//     // Redirect to the products page
//     navigate('/home');  
    
//   } catch (error) {
//     console.error('Login Error:', error);
//     toast.error('Login failed. Check credentials or server.');
//   }
// }

//   return (
//     <div className="container">
//       <h2 className='heading'>Login</h2>

//       <div className='row'>
//         <div className='col'></div>
//         <div className='col'>
//           <div className='sm-4'>
//             <label htmlFor=''>Email</label>
//             <input
              
//               type='email'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className='form-control'
//             />
//           </div>
//           <div className='sm-4'>
//             <label htmlFor=''>Password</label>
//             <input
              
//               type='password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className='form-control'
//             />
//           </div>
//           <div className='sm-4'>
//             <div>
//               Don't have an account? <Link to='/register'>Register here</Link>
//             </div>
//             <div>
//               Forgot password?{''}
//               <button className='btn btn-link'>Reset here.</button>
//             </div>
//             <button onClick={OnLogin} className='btn btn-success mt-3'>
//               Login
//             </button>
//           </div>
//         </div>
//         <div className='col'></div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { signIn } from "../services/user";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const OnLogin = async () => {
    try {
      const result = await signIn({ email, password });
      console.log("Login Success:", result);

      toast.success("Login successful!");
      sessionStorage.setItem("customerId", result.customerId);
      sessionStorage.setItem("user", JSON.stringify(result));

      navigate("/home");
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Login failed. Check credentials or server.");
    }
  };

  return (
    <div className="container">
    <div
      style={{
        backgroundImage: "url('/images/background3.png')", // Replace with actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container bg-brown p-5 rounded shadow" style={{ maxWidth: "400px" }}>
        <h2 className="heading text-center">Login</h2>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="text-center">
          <button onClick={OnLogin} className="btn btn-success w-100 mt-3">
            Login
          </button>
        </div>

        <div className="mt-3 text-center">
          Don't have an account? <Link to="/register">Register </Link>
        </div>
        <div className="text-center">
          Forgot password? <button className="btn btn-link">Reset here.</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
