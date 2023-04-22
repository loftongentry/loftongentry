import styles from '../../../styles/Page Component Styles/Index Styles/GlassLoader.module.css'

const GlassLoader = () => {
  return (
    <div className={styles.loader}>
      <div style={{ '--i': 1 }}></div>
      <div style={{ '--i': 2 }}></div>
      <div style={{ '--i': 3 }}></div>
      <div style={{ '--i': 4 }}></div>
    </div>
  )
}

export default GlassLoader