//Correct styling for fruity shooty container
import styles from '../../../styles/Page Component Styles/FruityShootyComponent.module.css'

const FruityShooty = () => {
  return (
    <div className={styles.container}>
      <iframe src="/game/index.html" title='Game'></iframe>
    </div>
  )
}

export default FruityShooty