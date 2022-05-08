import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/Pages/AddProduct/AddProduct';
import Blogs from './components/Pages/Blogs/Blogs';
import Contact from './components/Pages/Contact/Contact';
import Home from './components/Pages/Home/Home';
import Navbar from './components/Pages/Navbar/Navbar';
import Product from './components/Pages/Product/Product';
import CheckInventory from './components/Pages/Products/CheckInventory';
import ChekOut from './components/Pages/Products/ChekOut';
import Products from './components/Pages/Products/Products';
import UpdateProduct from './components/Pages/Products/UpdateProduct';
import RequiredAuth from './components/Pages/RequiredAuth/RequiredAuth';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Shared/Login/Login';
import Registration from './components/Shared/Registration/Registration';

function App() {
  
  return (
    <div className="App">
        <Navbar></Navbar>
        <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        
        
        (user ? '<Route path='/addproduct' element={<RequiredAuth><AddProduct></AddProduct></RequiredAuth>}></Route>
        <Route path='/checkout' element={<RequiredAuth><ChekOut></ChekOut></RequiredAuth>}></Route>
        <Route path='/chekinvenroty' element={<RequiredAuth><CheckInventory></CheckInventory></RequiredAuth>}></Route>
        <Route path='/updateproduct/:id' element={<RequiredAuth><UpdateProduct></UpdateProduct></RequiredAuth>}></Route>':'' )
        
        
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
      );

}

export default App;
