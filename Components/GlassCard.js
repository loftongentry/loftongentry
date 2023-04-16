import Link from 'next/link'
import styles from '../styles/Component Styles/GlassCard.module.css'

const GlassCard = (props) => {
  return (
    <div className={styles.box}>
      <span className={styles.span}></span>
      <div className={styles.content}>
        <h2 className={styles.cardHeader}>{props.cardHeader}</h2>
        <p className={styles.cardContent}>{props.cardContent}</p>
        <Link className={styles.cardLink} href={props.cardLink}>{props.cardLinkTitle}</Link>
      </div>
    </div>
  )
}

export default GlassCard