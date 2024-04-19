
import './App.css';
import  Navbar  from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import Shop from './Pages/Shop';
import ShopCategory  from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import bats_banner from './Components/Assets/bbbanner.png';
import balls_banner from './Components/Assets/kitbanner.jpg'
import clothes_banner from './Components/Assets/clbanner.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ='/' element ={<Shop/>}/>
        <Route path ='/bats' element ={<ShopCategory banner ={bats_banner} category="bat"/>}/>
        <Route path ='/balls' element ={<ShopCategory banner={balls_banner} category="ball"/>}/>
        <Route path ='/clothes' element ={<ShopCategory banner ={clothes_banner} category="clothe"/>}/>
        <Route path="/product" element ={<Product/>}>
          <Route path=':productId'  element={<Product/>}/>
        </Route>  
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
