//TODO: Sheen moves over top of buttons wheen screen size gets smaller
import styles from '../../styles/Component Styles/NavBar.module.css'
import NavBarLink from './NavBarLink'

const NavBar = () => {
  return (
    <nav className={styles.FirstNav}>
      <NavBarLink link='/' linkContent='Lofton Gentry'></NavBarLink>
      <div className={styles.secondNavBar}>
        <NavBarLink link='/fruityShooty' linkContent='Fruity Shooty'>Fruity Shooty</NavBarLink>
        <NavBarLink link='/runs' linkContent='My Runs'></NavBarLink>
      </div>
    </nav>
  )
}

export default NavBar