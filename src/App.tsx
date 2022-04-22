import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./App.styles";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import ForgotPasswordModalWrapper from "./components/routes/forgotPassword/ForgotPasswordModalWrapper";
import LoginModalWrapper from "./components/routes/login/LoginModalWrapper";
import RegisterModalWrapper from "./components/routes/register/RegisterModalWrapper";
import Ask from "./Pages/Ask";
import Courses from "./Pages/Courses";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Recipes from "./Pages/Recipes";

function App() {
  return (
    <Router>
      <GlobalStyles />
      {/* <Navbar/> */}
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginModalWrapper />} />
        <Route path="/register" element={<RegisterModalWrapper />} />
        <Route path="/forgot_password" element={<ForgotPasswordModalWrapper />} />
        <Route path="/products" element={<Products />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/ask-us" element={<Ask />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
