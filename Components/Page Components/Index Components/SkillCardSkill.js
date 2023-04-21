import styles from '../../../styles/Page Component Styles/Index Styles/SkillCardSkill.module.css'

const GlassSkillCardSkill = (props) => {
  const Tag = props.tag

  const style = {
    fontSize: '25px',
    color: props.tagStyle || 'black'
  }

  return (
    <div className={styles.container}>
      <Tag style={style} />
      <p className={styles.content}>{props.content}</p>
    </div>
  )
}

export default GlassSkillCardSkill