import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./Pages/About/About";
import Checkout from "./Pages/Checkout/Checkout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Product from "./Pages/Product/Product";
import Register from "./Pages/Register/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from "./Pages/Blog/Blog";
import ErrorPage from "./Pages/ErrorPage";
import Footer from "./components/Footer/Footer";
import CardDetails from "./components/CardCompo/CardDetails";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        }></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/blog" element={<Blog />}></Route>

        <Route path="/card/:cardDetails" element={<CardDetails />}></Route>

        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
