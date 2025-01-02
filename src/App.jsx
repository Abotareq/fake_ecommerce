import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Productdetalis from "./pages/ProductDetails/Productdetalis";
import SidaBar from "./components/SidaBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Productdetalis />} />
        </Routes>
        <SidaBar />
        <Footer />
      </Router>
    </>
  );
}

export default App;
