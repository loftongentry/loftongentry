//TODO: Kinda fixed, but kinda not, and need to get to work like Footer's sheen. Also need 
import NavBarLink from './NavBarLink'
import styles from '../../styles/Layout Component Styles/NavBar.module.css'


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