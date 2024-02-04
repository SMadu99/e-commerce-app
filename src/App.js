import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Order from "./pages/Order";
import Nomatch from "./pages/Nomatch";
import Products from "./pages/Products";
import Featured from "./pages/Featured";
import New from "./pages/New";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path='/order' element={<Order/>} />
        <Route path="/products" element={<Products/>}>
          <Route index element={<Featured/>}/>
          <Route path="featured" element={<Featured/>}/>
          <Route path="new" element={<New/>}/>
        </Route>
        <Route path='/*' element={<Nomatch/>} />
        </Routes>
      
    </div>
  );
}

export default App;
