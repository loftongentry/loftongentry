import Link from 'next/link'
import styles from '../../styles/Component Styles/NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.FirstNav}>
      <Link href='/' className={styles.home}>Lofton Gentry</Link>
      <div className={styles.secondNavBar}>
        <Link href='/fruityShooty' className={styles.fruityShooty}>Fruity Shooty</Link>
        <Link href='/runs' className={styles.runs}>My Runs</Link>
      </div>
    </nav>
  )
}

export default NavBar