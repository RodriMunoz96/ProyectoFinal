import AsideParent from "./AsideParent/AsideParent";
import AddChild from "./MainComponents/AddChild/AddChild";
import MyProfile from "./MainComponents/MyProfile/MyProfile";
import MyChildren from "./MainComponents/MyChildren/MyChildren";
import style from "./viewParent.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authenticateUser } from "../../redux/actions/actionAuth";

function ViewParent() {
  const locationMyProfile = useLocation().pathname.includes(
    "/viewParent/myProfile"
  );
  const locationMyChildren = useLocation().pathname.includes(
    "/viewParent/myChildren"
  );
  const locationAddChild = useLocation().pathname.includes(
    "/viewParent/addNewChild"
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const authenticate = () => {
      try {
        const result = dispatch(authenticateUser());
        console.log("Result of authentication:", result);

        if (result.success === false) {
          navigate("/");
        }
      } catch (error) {
        console.error("Error during authentication:", error);
        navigate("/");
      }
    };

    authenticate();
  }, [dispatch, navigate]);

  return (
    <div className={style.container}>
      <AsideParent />
      <main className={style.container_main}>
        {locationMyProfile ? <MyProfile /> : null}
        {locationMyChildren ? <MyChildren /> : null}
        {locationAddChild ? <AddChild /> : null}
      </main>
    </div>
  );
}

export default ViewParent;
