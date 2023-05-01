import Link from 'next/link'
import { FiGithub } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import styles from '../../styles/Layout Component Styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footerContent}>
      <div className={styles.iconContainer}>
        <Link href='https://github.com/loftongentry' className={styles.glassIconContainer}>
          <FiGithub className={styles.gitHub} />
        </Link>
        <Link href='https://www.linkedin.com/in/lofton-gentry/' className={styles.glassIconContainer}>
          <FaLinkedinIn className={styles.linkedIn} />
        </Link>
      </div>
      <p className={styles.bottomContent}>This website was developed by Lofton and is receiving regular updates</p>
    </footer>
  )
}

export default Footer