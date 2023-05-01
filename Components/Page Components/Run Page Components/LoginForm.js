import { useState } from 'react'
import styles from '../../../styles/Page Component Styles/Index Styles/GlassModalForm.module.css'
import Input from '../Index Components/Input'
import buttonStyles from '../../../styles/Page Component Styles/Button.module.css'
import GlassLoader from '../Index Components/GlassLoader'

const initValues = {
  userEmail: '',
  password: ''
}

const initState = { values: initValues }

const LoginForm = ({ closeModal }) => {
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

  const onSubmit = () => { }

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalBackground}>
        <div className={fadeOut ? styles.modalContainerExit : styles.modalContainer}>
          <div className={styles.closeButton}>
            <button onClick={handleCloseModal}> X </button>
          </div>
          <div className={styles.modalHeader}>
            <h1>Login Here</h1>
          </div>
          {error && (<div style={{ display: 'flex', justifyContent: 'center', color: 'red' }}>{error}</div>)}
          <div className={styles.modalBody}>
            <Input
              type='email'
              id='userEmail'
              name='userEmail'
              label='User Email'
              value={values.userEmail}
              onChange={handleInputChange}
            />
            <Input
              type='password'
              id='password'
              name='password'
              label='User Password'
              value={values.password}
              onChange={handleInputChange}
            />
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

export default LoginForm