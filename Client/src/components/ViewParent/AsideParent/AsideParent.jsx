import Links from './Links/Links';
import style from './asideParent.module.css';

import myProfile from '../../../Img/imgViewParent/iconMyProfile.png'
import myChildren from '../../../Img/imgViewParent/iconChild.png'
import myBook from '../../../Img/imgViewParent/iconBook.png'
import logout from '../../../Img/imgViewParent/logoutIcon.svg'

function AsideParent() {
  return (
    <aside className={style.container_aside}>
        <div className={style.container_dad_name}>
            <h1>Bienvenido (Nombre del padre)</h1>
        </div>
        <hr />
        <div className={style.container_links}>
            <Links url={'myProfile'} img={myProfile} name={'Mi Perfil'}/>
            <Links url={'myChildren'} img={myChildren} name={'Mis hijos'}/>
            <Links url={'addNewChild'} img={myBook} name={'Incribir a mi hijo'}/>
            <Links url={'/login'} img={logout} name={'Cerrar sesión'}/>
        </div>
    </aside>
  )
}

export default AsideParent