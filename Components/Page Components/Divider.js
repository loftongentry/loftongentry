import styles from '../../styles/Page Component Styles/Divider.module.css'

const Divider = ({title}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.secondaryHeader}>{title}</h3>
      <hr className={styles.divider}/>
    </div>
  )
}

export default Divider