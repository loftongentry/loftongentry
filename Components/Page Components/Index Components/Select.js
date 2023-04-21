import { useState } from 'react'
import styles from '../../../styles/Page Component Styles/Index Styles/Select.module.css'

const Select = (props) => {
  const [hasError, setHasError] = useState(false)

  const handleBlur = () => {
    !props.value ? setHasError(true) : setHasError(false)
  }

  return (
    <div className={styles.selectContainer}>
      <label className={styles.selectLabel}>{props.label}</label>
      <select
        className={hasError ? styles.selectError : styles.select}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        onBlur={handleBlur}
      >
        <option value='' disabled>Please Choose</option>
        {props.options?.map(option => (
          <option value={`${option}`}>{option}</option>
        ))}
      </select>
      {hasError && <p className={styles.errorMessage}>Required</p>}
    </div>
  )
}

export default Select