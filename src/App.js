import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from "./components/Assets/banner_mens.png"
import womans_banner from "./components/Assets/banner_women.png"
import kids_banner from "./components/Assets/banner_kids.png"

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={womans_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
       
       

    </>
  );
}

export default App;
