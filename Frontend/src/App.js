import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Route, Routes } from 'react-router-dom'
import Products from './screens/Products'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CategoryProducts from './screens/CategoryProducts'
import Profile from './screens/Profile'
import PlacedOrders from './screens/PlacedOrders'
import MyOrders from './screens/MyOrders'

function App() {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:category' element={<CategoryProducts />} />
        <Route path="/orders" element={<PlacedOrders />} />
        <Route path="/my-orders" element={<MyOrders />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
