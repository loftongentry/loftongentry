import Link from 'next/link'
import styles from '../../styles/Layout Component Styles/NavBarLink.module.css'

const NavBarLink = (props) => {
  return (
    <div className={styles.card}>
      <Link className={styles.link} href={props.link}>{props.linkContent}</Link>
    </div>
  )
}

export default NavBarLink