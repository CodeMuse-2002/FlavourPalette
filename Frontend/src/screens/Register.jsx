import React, { useState } from "react";
import {register} from "../services/user";
import { toast } from 'react-toastify'
// import { Link, useNavigate } from 'react-router-dom'

function Register() {
    const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    const OnRegister = async () => {
      if (firstName.length === 0) {
        toast.warning('Please enter first name')
      } else if (lastName.length === 0) {
        toast.warning('Please enter last name')
      } else if (email.length === 0) {
        toast.warning('Please enter email')
      } else if (password.length === 0) {
        toast.warning('Please enter password')
      } else {
        // call register function to consume register API
        const result = await register({firstName, lastName, email, password})
        if (result.status === 'success') {
          toast.success('Successfully registered user')
  
          // dynamic navigation
          // navigate to login component
          // navigate('/signIn')
        } else {
          toast.error(result['error'])
        }
      }
    }

//   return (
//     <div>
//       <h2 className='heading'>Register</h2>

//       <div className='row'>
//         <div className='col-3'></div>
//         <div className='col-6'>
//           <div className='row'>
//             <div className='col'>
//               <div className='mb-4'>
//                 <label htmlFor=''>First Name</label>
//                 <input
//                   onChange={(e) => setFirstName(e.target.value)}
//                   type='text'
//                   className='form-control'
//                 />
//               </div>
//             </div>
//             <div className='col'>
//               <div className='mb-4'>
//                 <label htmlFor=''>Last Name</label>
//                 <input
//                   onChange={(e) => setLastName(e.target.value)}
//                   type='text'
//                   className='form-control'
//                 />
//               </div>
//             </div>
//           </div>

//           <div className='row'>
//             <div className='col'>
//               <div className='mb-4'>
//                 <label htmlFor=''>Email</label>
//                 <input
//                   onChange={(e) => setEmail(e.target.value)}
//                   type='text'
//                   className='form-control'
//                 />
//               </div>
//             </div>
//           </div>

//           <div className='row'>
//             <div className='col'>
//               <div className='mb-3'>
//                 <label htmlFor=''>Password</label>
//                 <input
//                   onChange={(e) => setPassword(e.target.value)}
//                   type='password'
//                   className='form-control'
//                 />
//               </div>
//             </div>
//             <div className='col'>
//               <div className='mb-3'>
//                 <label htmlFor=''>Confirm Password</label>
//                 <input
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   type='password'
//                   className='form-control'
//                 />
//               </div>
//             </div>
//           </div>

//           <div className='row'>
//             <div className='col'>
//               <div>
//                 Already have an account? <Link to='/signIn'>Login here</Link>
//               </div>
//               <button onClick={OnRegister} className='btn btn-success mt-2'>
//                 Register
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className='col-3'></div>
//       </div>
//     </div>
//   );
// };
// return (
//   <div>
//     <h2>Register</h2>
//     <div>
//       <label>First Name:</label>
//       <input
//         type="text"
//         value={firstName}
//         onChange={(e) => setFirstName(e.target.value)}
//       />
//     </div>
//     <div>
//       <label>Last Name:</label>
//       <input
//         type="text"
//         value={lastName}
//         onChange={(e) => setLastName(e.target.value)}
//       />
//     </div>
//     <div>
//       <label>Email:</label>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//     </div>
//     <div>
//       <label>Password:</label>
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//     </div>
//     <button onClick={OnRegister}>Register</button>
//   </div>
return (
<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" value={email}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password" value={password}/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>Maharashtra</option>
        <option>Karnataka</option>
        <option>Gujarat</option>
        <option>Rajasthan</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
);
}

export default Register;
