
// import './App.css';

import { Box } from "@mui/system";
// import theme from "./theme";
import Button from '@mui/material/Button';
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Giving from "./components/Giving";
import Celebrat from "./components/Celebrat";
import Gifts from "./components/Gifts";
import Newgift from "./components/Newgift";
import Sendemail from "./components/Sendemail";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <Giving/>
      <Celebrat/>
      <Gifts/>
      <Newgift/>
      <Sendemail/>
      <Footer/>
    </div>
  );
}

export default App;
