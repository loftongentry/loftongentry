import { useState } from 'react'
import styles from '../../../styles/Page Component Styles/Index Styles/TextArea.module.css'

const TextArea = (props) => {
  const [hasError, setHasError] = useState(false)

  const handleBlur = () => {
    !props.value ? setHasError(true) : setHasError(false)
  }

  return (
    <div className={styles.textAreaContainer}>
      <label className={styles.textAreaLabel}>{props.label}</label>
      <textarea
        className={hasError ? styles.textAreaError : styles.textArea}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={handleBlur}
      ></textarea>
      {hasError && <p className={styles.errorMessage}>Required</p>}
    </div>
  )
}

export default TextArea