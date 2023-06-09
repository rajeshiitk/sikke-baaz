import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinDetails from "./components/CoinDetails";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/sikke-baaz" element={ <Home />}/>
        <Route path="/sikke-baaz/coins" element={ <Coins />}/>
        <Route path="/sikke-baaz/exchanges" element={ <Exchanges />}/>
        <Route path="/sikke-baaz/coins/:id" element={ <CoinDetails />}/>
        <Route path="/sikke-baaz/login" element={ <Login />}/>
        <Route path="/sikke-baaz/signup" element={ <Signup />}/>
      </Routes>
      <Footer />  
    </Router>

  );
}

export default App;
