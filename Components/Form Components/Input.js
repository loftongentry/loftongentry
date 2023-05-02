import { useState } from 'react'
import styles from '@/styles/Form Component Styles/Input.module.css'

const Input = (props) => {
  const [hasError, setHasError] = useState(false)

  const handleBlur = () => {
    !props.value ? setHasError(true) : setHasError(false)
  }

  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel}>{props.label}</label>
      <input
        className={hasError ? styles.inputError : styles.input}
        type={props.type}
        id={props.id}
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