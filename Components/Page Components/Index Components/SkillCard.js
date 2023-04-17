import SkillCardSkill from './SkillCardSkill'
import styles from '../../../styles/Page Component Styles/SkillCard.module.css'

const SkillCard = (props) => {
  return (
    <div>
      <h3 className={styles.cardHeader}>
        {props.cardHeader}
      </h3>
      <div className={styles.cardBodyContainer}>
        <div className={styles.cardContent}>
          {props.cardContent?.map((item, index) => (
            <SkillCardSkill tag={props.tag[index]} content={item}/>
          ))}</div>
      </div>
    </div>
  )
}

export default SkillCard