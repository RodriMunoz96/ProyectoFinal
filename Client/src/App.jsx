import Navbar1 from "./components/Navbar";
import HomePage from "./peges/HomePage";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/login";
function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
