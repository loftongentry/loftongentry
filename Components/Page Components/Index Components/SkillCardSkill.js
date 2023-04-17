import styles from '../../../styles/Page Component Styles/SkillCardSkill.module.css'

const GlassSkillCardSkill = (props) => {
  const Tag = props.tag

  return (
    <div className={styles.container}>
      <Tag style={{ fontSize: '25px', color: `${props.tagStyle}` }} />
      <p className={styles.content}>{props.content}</p>
    </div>
  )
}

export default GlassSkillCardSkill