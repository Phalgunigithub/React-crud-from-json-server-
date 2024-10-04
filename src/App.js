import logo from './logo.svg';
import './App.css';
import { Footer, Navbar } from './components/layout';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { ProductList } from './pages/admin/products/ProductLists';
import { CreateProduct } from './pages/admin/products/CreateProduct';



function App() {
  return (

    <BrowserRouter>
    <div className="App">
      
      <Navbar/>

        <Routes>
            <Route path='/' element={<Home></Home>}></Route>


        
            <Route path='/contact' element={<Contact></Contact>}></Route>
        

            <Route path='/admin/products' element={<ProductList></ProductList>}></Route>
        
            <Route path='/admin/products/create' element={<CreateProduct></CreateProduct>}></Route>
        
            <Route path='*' element={<NotFound></NotFound>}></Route>



        </Routes>
     
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
