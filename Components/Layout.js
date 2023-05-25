import NavBar from "./Layout Components/NavBar"
import Footer from '@/Components/Layout Components/Footer'
import styles from '../styles/Layout Component Styles/Layout.module.css'
import PreLoader from "./PreLoader/PreLoader"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const tl = gsap.timeline()

const Layout = ({ children }) => {
  const navBarRef = useRef(null)
  const mainRef = useRef(null)
  const footerRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.from('.animation-element', {
      duration: 7,
    })
      .fromTo(navBarRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.75 }
      )
      .fromTo(mainRef.current,
        { opacity: 0 },
        { opacity: 1, duration: .75 },
      )
      .fromTo(footerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: .75 },
      )
    })
    
    return () => ctx.revert()
  })

  return (
    <div className={styles.layout}>
      <PreLoader className='animation-element' />
      <div ref={navBarRef}>
        <NavBar />
      </div>
      <main ref={mainRef}>
        {children}
      </main>
      <div className={styles.footerWrapper} ref={footerRef}>
        <Footer />
      </div>
    </div>
  )
}

export default Layout