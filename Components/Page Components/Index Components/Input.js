import { useState } from 'react'
import styles from '../../../styles/Page Component Styles/Index Styles/Input.module.css'

const Input = (props) => {
  const [hasError, setHasError] = useState(false)

  const handleBlur = () => {
    if (!props.value) {
      setHasError(true)
    } else {
      setHasError(false)
    }
  }

  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel}>{props.label}</label>
      <input
        className={hasError ? styles.inputError : styles.input}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={handleBlur}
      />
      {hasError && <p className={styles.errorMessage}>Required</p>}
    </div>
  )
}

export default Input