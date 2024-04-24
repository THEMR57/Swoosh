
import './App.css';
import  Navbar  from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import Shop from './Pages/Shop';
import ShopCategory  from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import bats_balls_banner from './Components/Assets/bbbanner.png';
import Assesories_banner from './Components/Assets/kitbanner.jpg'
import clothes_banner from './Components/Assets/clbanner.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ='/' element ={<Shop/>}/>
        <Route path ='/batsandballs' element ={<ShopCategory banner ={bats_balls_banner} category="batandball"/>}/>
        <Route path ='/assesories' element ={<ShopCategory banner={Assesories_banner} category="assesories"/>}/>
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

