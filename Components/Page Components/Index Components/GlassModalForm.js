import { useState } from 'react'
import Input from '../../Form Components/Input'
import Select from '../../Form Components/Select'
import TextArea from '../../Form Components/TextArea'
import styles from '../../../styles/Page Component Styles/Index Styles/GlassModalForm.module.css'
import buttonStyles from '@/styles/Global Component Styles/Button.module.css'
import { sendContactForm } from '@/library/sendContactForm'
import GlassLoader from '../../Global Components/GlassLoader'

const initValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  contactReason: '',
  additionalDetails: '',
}

const initState = { values: initValues }

const GlassModalForm = ({ closeModal }) => {
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
      await sendContactForm(values)
      setFormState(initState)
      handleCloseModal()
    } catch (e) {
      console.log(e)
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
            <h1>Contact Me</h1>
          </div>
          {error && (<div style={{ display: 'flex', justifyContent: 'center', color: 'red' }}>{error}</div>)}
          <div className={styles.modalBody}>
            <Input
              type='text'
              id='firstName'
              name='firstName'
              label='First name'
              value={values.firstName}
              onChange={handleInputChange}
            />
            <Input
              type='text'
              id='lastName'
              name='lastName'
              label='Last Name'
              value={values.lastName}
              onChange={handleInputChange}
            />
            <Input
              type='email'
              id='email'
              name='email'
              label='Email'
              value={values.email}
              onChange={handleInputChange}
            />
            <Input
              type='tel'
              id='phoneNumber'
              name='phoneNumber'
              label='Phone Number'
              value={values.phoneNumber}
              onChange={handleInputChange}
            />
            <Select
              label='Reason for Contacting'
              name='contactReason'
              value={values.contactReason}
              onChange={handleInputChange}
              options={['Job Opportunity', 'Design my Website', 'Other']}
            />
            <TextArea
              name='additionalDetails'
              label='Additional Details (Optional)'
              value={values.additionalDetails}
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

export default GlassModalForm