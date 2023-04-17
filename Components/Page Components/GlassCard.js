//TODO: Make height of the cards always the same
import Link from 'next/link'
import { FiGithub } from 'react-icons/fi'
import styles from '../../styles/Page Component Styles/GlassCard.module.css'

const GlassCard = (props) => {
  return (
    <div className={styles.box}>
      <span className={styles.span}></span>
      <div className={styles.content}>
        <h2 className={styles.cardHeader}>{props.cardHeader}</h2>
        <p className={styles.cardContent}>{props.cardContent}</p>
        <div className={styles.cardFooter}>
          {props.buttonTo && (
            <button className={styles.cardLink} onClick={
              () => { window.open(`${props.cardLink}`, '_blank') }
            }>{props.cardLinkTitle}</button>
          )}
          <Link href={props.gitHubLink}>
            <FiGithub className={styles.iconLink} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GlassCard