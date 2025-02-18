// import axios from 'axios'
// import { createUrl } from '../utils'

// export async function getAllProducts() {
//   try {
//     // create the url
//     const url = createUrl('/products/view')

//     const response = await axios.get(url)
//     return response.data
//   } catch (ex) {
//     return { status: 'error', error: ex }
//   }
// }
// services/productService.js
import axios from 'axios';

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/products`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};
export const getCategory = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/products/category`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};

export const getProductByCategory = async (category) =>{
  try{
    const response = await axios.get(`http://localhost:8080/products/${category}`)
    return response.data;
  }catch(error){
    throw new Error('Failed to fetch products');
  }
}
// export async function addNewProduct(category, productName, quantity,adminId) {
//   try {
//     const url = createUrl('todo/my')
//     const token = sessionStorage['token']
//     const response = await axios.get(url, {
//       headers: {
//         token,
//       },
//     })
//     return response.data
//   } catch (ex) {
//     return { status: 'error', error: ex }
//   }
// }

// export async function markItemPublic(id) {
//   try {
//     const url = createUrl('todo/make-public/' + id)
//     const token = sessionStorage['token']
//     const response = await axios.patch(
//       url,
//       {}, // body
//       {
//         headers: {
//           token,
//         },
//       }
//     )
//     return response.data
//   } catch (ex) {
//     return { status: 'error', error: ex }
//   }
// }

// export async function markItemPrivate(id) {
//   try {
//     const url = createUrl('todo/make-private/' + id)
//     const token = sessionStorage['token']
//     const response = await axios.patch(
//       url,
//       {}, // body
//       {
//         headers: {
//           token,
//         },
//       }
//     )
//     return response.data
//   } catch (ex) {
//     return { status: 'error', error: ex }
//   }
// }

// export async function createTodoItem(title, details) {
//   try {
//     const url = createUrl('todo/')
//     const token = sessionStorage['token']
//     const body = {
//       title,
//       details,
//     }
//     const response = await axios.post(url, body, {
//       headers: {
//         token,
//       },
//     })
//     return response.data
//   } catch (ex) {
//     return { status: 'error', error: ex }
//   }
// }
