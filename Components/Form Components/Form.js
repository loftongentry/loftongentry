import { useState } from 'react'
import Input from './Input'
import GlassLoader from '../Global Components/GlassLoader'
import styles from '@/styles/Form Component Styles/GlassModalForm.module.css'
import buttonStyles from '@/styles/Global Component Styles/Button.module.css'
import Select from './Select'
import TextArea from './TextArea'

const Form = ({ modalLabel, types, keys, labels, asyncFunc, specialComponents, closeModal }) => {
  const initState = {
    values: keys.reduce((acc, key) => ({ ...acc, [key]: '' }), {})
  }

  const [formState, setFormState] = useState(initState)
  const [fadeOut, setFadeOut] = useState(false)
  const { values, isLoading, error } = formState

  const handleCloseModal = () => {
    setFadeOut(true)
    setTimeout(() => {
      setFadeOut(false)
      closeModal()
    }, 300)
  }

  const handleInputChange = ({ target }) => {
    setFormState(prevState => ({
      ...prevState,
      values: {
        ...prevState.values,
        [target.name]: target.value
      }
    }))
  }

  const onSubmit = async () => {
    setFormState(prev => ({
      ...prev,
      isLoading: true
    }))
    try {
      await asyncFunc(values)
      console.log(values)
      setFormState(initState)
      handleCloseModal()
    } catch (e) {
      setFormState(prev => ({
        ...prev,
        isLoading: false,
        error: e.message
      }))
    }
  }

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalBackground}>
        <div className={fadeOut ? styles.modalContainerExit : styles.modalContainer}>
          <div className={styles.closeButton}>
            <button onClick={handleCloseModal}> X </button>
          </div>
          <div className={styles.modalHeader}>
            <h1>{modalLabel}</h1>
          </div>
          {error && (<div style={{ display: 'flex', justifyContent: 'center', color: 'red' }}>{error}</div>)}
          <div className={styles.modalBody}>
            {
              keys.map((key, index) => (
                <Input
                  key={key}
                  type={types[index]}
                  id={key}
                  name={key}
                  label={labels[index]}
                  value={values[key]}
                  onChange={handleInputChange}
                />
              ))}
            {specialComponents && specialComponents.map((component, index) => (
              <div key={`special-${index}`}>
                {component.type === 'select' && (
                  <Select
                    name={component.name}
                    label={component.label}
                    value={values[component.name] || ''}
                    onChange={handleInputChange}
                    options={component.options}
                  />
                )}
                {component.type === 'textarea' && (
                  <TextArea
                    name={component.name}
                    label={component.label}
                    value={values[component.name] || ''}
                    onChange={handleInputChange}
                  />
                )}
              </div>
            ))}
          </div>
          <div className={styles.modalFooter}>
            {!isLoading ?
              <button className={buttonStyles.button} onClick={onSubmit}>Submit</button>
              : <GlassLoader />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form