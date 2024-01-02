import { NavLink } from "react-router-dom"
import style from './myProfile.module.css'

function MyProfile() {
  return (
    <div>
      <h1>Mi perfil</h1>
      <div>
        <NavLink to={'/formParent'} className={style.link_to_parent}>Llenar datos</NavLink>
      </div>
    </div>
  )
}

export default MyProfile