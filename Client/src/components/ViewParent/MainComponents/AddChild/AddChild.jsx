import { NavLink } from "react-router-dom";
import style from "./addChild.module.css";
import student from "../../../../Img/imgViewParent/student.jpg";
import FormStudent from "../../../Forms/FormStudent/formStudent";

function AddChild() {
  //const arrowLeft = "-->";
  //const arrowRight = "<--";

  return (
    <div className={style.container}>
      <div className={style.container_second}>
        <FormStudent />
        {/* <img src={student} alt="logo" />
        <b className={style.arrow_left}>{arrowLeft}</b>
        <NavLink className={style.navlink}>Inscribe a tu hijo</NavLink>
        <b className={style.arrow_right}>{arrowRight}</b> */}
      </div>
    </div>
  );
}

export default AddChild;
