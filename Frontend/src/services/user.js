import axios from 'axios'
// import { createUrl } from '../utils'
// services/userService.js
// import axios from 'axios';

export const signIn = async (credentials) => {
  try {
    const response = await axios.post('http://localhost:8080/users/signin', credentials);
    return response.data;
  } catch (error) {
    throw new Error('Failed to sign in');
  }
};

// services/userService.js
export const register = async (userData) => {
  try {
    const response = await axios.post('http://localhost:8080/users/register', userData);
    return response.data;
  } catch (error) {
    throw new Error('Registration failed');
  }
};

export const profile = async (id,userData) => {
  try {
    const response = await axios.post(`http://localhost:8080/users/${id}}`, userData);
    return response.data;
  } catch (error) {
    throw new Error('Registration failed');
  }
};

// export async function signIn(email, password) {
//   try {
//     // create the url
//     const url = createUrl('/users/signin')

//     // create the request body
//     const body = {
//       email,
//       password,
//     }

//     // call the API
//     const response = await axios.post(url, body)

//     // get the response body
//     return response.data
//   } catch (ex) {
//     return { status: 'error', error: ex }
//   }
// }

// export async function register(firstName, lastName, email, password) {
//   try {
//     const url = createUrl('/users/register')
//     const body = {
//       firstName,
//       lastName,
//       email,
//       password,
//     }
//     const response = await axios.post(url, body)
//     return response.data
//   } catch (ex) {
//     return { status: 'error', error: ex }
//   }
// }
// // export async function updatePassword(password) {
// //   try {
// //     const url = createUrl('user/update-password')
// //     const body = {
// //       password,
// //     }
// //     const token = sessionStorage['token']
// //     const response = await axios.put(url, body, {
// //       headers: { token },
// //     })
// //     return response.data
// //   } catch (ex) {
// //     return { status: 'error', error: ex }
// //   }
// // }

// // export async function getMyProfile() {
// //   try {
// //     const url = createUrl('user/profile')
// //     const token = sessionStorage['token']
// //     const response = await axios.get(url, {
// //       headers: {
// //         token,
// //       },
// //     })
// //     return response.data
// //   } catch (ex) {
// //     return { status: 'error', error: ex }
// //   }
// // }

// // export async function updateMyProfile(firstName, lastName, phone) {
// //   try {
// //     const url = createUrl('user/profile')
// //     const token = sessionStorage['token']
// //     const body = {
// //       firstName,
// //       lastName,
// //       phone,
// //     }
// //     const response = await axios.put(url, body, {
// //       headers: {
// //         token,
// //       },
// //     })
// //     return response.data
// //   } catch (ex) {
// //     return { status: 'error', error: ex }
// //   }
// // }
