import { useState } from 'react'
import GlassLoader from '../../Global Components/GlassLoader'
import Input from '../../Form Components/Input'
import { register } from '../../../pages/api/authentication'
import styles from '../../../styles/Page Component Styles/Index Styles/GlassModalForm.module.css'
import buttonStyles from '../../../styles/Page Component Styles/Button.module.css'

const initValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const initState = { values: initValues }

const RegisterForm = ({ closeModal }) => {
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
      await register(values)
      setFormState(initState)
      handleCloseModal()
    } catch(e){
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
            <h1>Register Here</h1>
          </div>
          {error && (<div style={{ display: 'flex', justifyContent: 'center', color: 'red' }}>{error}</div>)}
          <div className={styles.modalBody}>
            <Input
              type='text'
              id='name'
              name='name'
              label='Your Name'
              value={values.name}
              onChange={handleInputChange}
            />
            <Input
              type='email'
              id='email'
              name='email'
              label='Your Email'
              value={values.email}
              onChange={handleInputChange}
            />
            <Input
              type='password'
              id='password'
              name='password'
              label='Your Password'
              value={values.password}
              onChange={handleInputChange}
            />
            <Input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              label='Confirm Password'
              value={values.confirmPassword}
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

export default RegisterForm