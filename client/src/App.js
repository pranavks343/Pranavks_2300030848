import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Home from './Components/Home';
import Cart from './Components/Cart';
import Payment from './Components/Payment';
import Register from './Components/Register';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Order from './Components/Order';
import Track from './Components/Track';
import User from './Components/User';
import ProductsCard from './Components/ProductsCard';
import Welcome from './Components/Welcome';
import ApiProducts from './Components/ApiProducts';
import Profile from './Components/Profile';
import ProductsList from './Components/ProductsList';
import Navbar from './Components/Navbar';
import UserMList from './Components/UserMList';
import ProductMList from './Components/ProductsList';
import OrderList from './Components/OrderList';
import FeedbackForm from './Components/FeedBackForm';


function App() {
  const orderDetails = [
    { "oid": 11, "oname": "rama", "odate": "06-JAN-25", "ostatus": 'dispatched', "dboy": "hari" },
    { "oid": 22, "oname": "sita", "odate": "06-JAN-25", "ostatus": 'packed', "dboy": "ravi" },
    { "oid": 33, "oname": "hanuman", "odate": "06-JAN-25", "ostatus": 'delivered', "dboy": "lakshmi" },
    { "oid": 44, "oname": "lakshmana", "odate": "06-JAN-25", "ostatus": 'packed', "dboy": "mandavi" },
    { "oid": 55, "oname": "oormila", "odate": "06-JAN-25", "ostatus": 'dispatched', "dboy": "sruthakeerthi" }
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/user' element={<User />} />
        <Route path='/feedbackform' element={<FeedbackForm />} /> {/* ✅ Feedback route */}
        <Route path='/payment' element={<Payment />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/order' element={<Order />} />
        <Route path='/track' element={<Track orders={orderDetails} />} />
        <Route path='/apiproducts' element={<ApiProducts />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/productslist' element={<ProductMList />} />
        <Route path='/orderlist' element={<OrderList />} />
        <Route path='/userslist' element={<UserMList />} />
      </Routes>
    </Router>
  );
}

export default App;
