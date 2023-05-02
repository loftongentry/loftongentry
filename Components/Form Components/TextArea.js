import styles from '@/styles/Form Component Styles/TextArea.module.css'

const TextArea = (props) => {
  return (
    <div className={styles.textAreaContainer}>
      <label className={styles.textAreaLabel}>{props.label}</label>
      <textarea
        className={styles.textArea}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></textarea>
    </div>
  )
}

export default TextArea