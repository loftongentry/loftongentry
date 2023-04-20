import FruityShooty from "@/Components/Page Components/Fruity Shooty Components/FruityShooty"
import styles from '../styles/Page Styles/FruityShootyPage.module.css'

const fruityShooty = () => {
  return (
    <div>
      <p className={styles.disclaimer}>*This game currently only works on desktop*</p>
      <FruityShooty />
    </div>
  )
}

export default fruityShooty