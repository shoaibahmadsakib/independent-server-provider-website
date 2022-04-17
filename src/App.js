import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./Pages/About/About";
import Checkout from "./Pages/Checkout/Checkout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Product from "./Pages/Product/Product";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
