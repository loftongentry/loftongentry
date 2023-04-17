import styles from '../../styles/Page Component Styles/GlassSkillCard.module.css'

const GlassSkillCard = (props) => {
  return (
    <div>
      <h3 className={styles.cardHeader}>
        {props.cardHeader}
      </h3>
      <div className={styles.cardBodyContainer}>
        <p className={styles.cardContent}>{props.cardContent}</p>
      </div>
    </div>
  )
}

export default GlassSkillCard