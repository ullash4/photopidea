import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import Blogs from './Components/Pages/Blogs/Blogs';
import CheckOut from './Components/Pages/CheckOut/CheckOut';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import Home from './Components/Pages/Home/Home';
import LogIn from './Components/Pages/LogIn/LogIn';
import Notfound from './Components/Pages/Notfound/Notfound';
import Register from './Components/Pages/Register/Register';
import Reviews from './Components/Pages/Reviews/Reviews';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import RequireAuth from './Components/Shared/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
        <CheckOut></CheckOut>
        </RequireAuth>
        }></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
