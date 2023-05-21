import NavBar from "./Layout Components/NavBar"
import Footer from '@/Components/Layout Components/Footer'
import styles from '../styles/Layout Component Styles/Layout.module.css'
import PreLoader from "./PreLoader/PreLoader"

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <PreLoader />
      <NavBar />
      <main>
        {children}
      </main>
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
      <div className={styles.blob}></div>
    </div>
  )
}

export default Layout