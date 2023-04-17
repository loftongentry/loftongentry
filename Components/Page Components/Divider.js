import styles from '../../styles/Page Component Styles/Divider.module.css'

const Divider = ({title}) => {
  return (
    <div className={styles.container}>
      <hr className={styles.divider}/>
      <h3 className={styles.secondaryHeader}>{title}</h3>
    </div>
  )
}

export default Divider