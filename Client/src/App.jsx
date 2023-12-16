import Navbar1 from "./components/Navbar";
import HomePage from "./peges/HomePage";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/login";
import FormParent from "./components/Forms/FormParent/FormParent";
import QuienesSomos from "./peges/QuienesSomos";
import QueTeOfrecemos from "./components/QueTeOfrecemos";
import PorQueElegir from "./components/PorqueElegir";
import NotFound from "./peges/NotFound";
import NuestroEquipo from "./peges/NuestroEquipo";
import AddUserForm from "./components/AddUserForm";
import Contacto from "./peges/Contacto";
function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/formParent" element={<FormParent />} />
        <Route exact path="/QuienesSomos" element={<QuienesSomos />} />
        <Route exact path="/oferta" element={<QueTeOfrecemos />} />
        <Route exact path="/porqueelegir" element={<PorQueElegir />} />
        <Route exact path="/nuestroequipo" element={<NuestroEquipo />} />
        <Route exact path="/addUser" element={<AddUserForm />} />
        <Route exact path="/contacto" element={<Contacto />} />

        <Route exact path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
