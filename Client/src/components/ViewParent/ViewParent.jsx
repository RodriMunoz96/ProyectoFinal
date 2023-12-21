import AsideParent from './AsideParent/AsideParent'
import AddChild from './MainComponents/AddChild/AddChild'
import MyProfile from './MainComponents/MyProfile/MyProfile'
import MyChildren from './MainComponents/MyChildren/MyChildren'
import style from  './viewParent.module.css'
import { useLocation } from 'react-router-dom'


function ViewParent() {
  const locationMyProfile = useLocation().pathname.includes('/viewParent/myProfile')
  const locationMyChildren = useLocation().pathname.includes('/viewParent/myChildren')
  const locationAddChild = useLocation().pathname.includes('/viewParent/addNewChild')

  return (
    <div className={style.container}>
        <AsideParent/>
        <main className={style.container_main}>
          { locationMyProfile ? <MyProfile/>: null }
          { locationMyChildren ? <MyChildren/>: null }
          { locationAddChild ? <AddChild/> : null }
        </main>
    </div>
  )
}

export default ViewParent