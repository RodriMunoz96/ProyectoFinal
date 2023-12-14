import Navbar1 from "./components/Navbar";
import HomePage from "./peges/HomePage";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/login";
import FormParent from "./components/Forms/FormParent/FormParent";
function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/formParent" element={<FormParent/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
