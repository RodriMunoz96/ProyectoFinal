import Carrousel from "../components/Carrousel";
import PorqueElegir from "../components/PorqueElegir";
import QueTeOfrecemos from "../components/QueTeOfrecemos";
import FormStudent from "../components/Forms/FormStudent/formStudent";

const HomePage = () => {
  return (
    <>
      <FormStudent />
      <Carrousel />
      <PorqueElegir />
      <QueTeOfrecemos />
    </>
  );
};

export default HomePage;
