import { useState } from 'react'
import Input from './Input'
import Select from './Select'
import TextArea from './TextArea'
import styles from '../../../styles/Page Component Styles/Index Styles/GlassModalForm.module.css'
import buttonStyles from '../../../styles/Page Component Styles/Button.module.css'

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
  const { values, isLoading, error } = formState

  const handleInputChange = ({ target }) => {
    setFormState(prevState => ({
      ...prevState,
      values: {
        ...prevState.values,
        [target.name]: target.value
      }
    }))
  }

  const onSubmit = () => {
    console.log(formState)
  }

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          <div className={styles.closeButton}>
            <button onClick={closeModal}> X </button>
          </div>
          <div className={styles.modalHeader}>
            <h1>Contact Me</h1>
          </div>
          <div className={styles.modalBody}>
            <Input
              type='text'
              name='firstName'
              label='First name'
              value={values.firstName}
              onChange={handleInputChange}
            />
            <Input
              type='text'
              name='lastName'
              label='Last Name'
              value={values.lastName}
              onChange={handleInputChange}
            />
            <Input
              type='email'
              name='email'
              label='Email'
              value={values.email}
              onChange={handleInputChange}
            />
            <Input
              type='tel'
              name='phoneNumber'
              label='Phone Number'
              value={values.phoneNumber}
              onChange={handleInputChange}
            />
            <Select
              label='Reaseon for Contacting'
              name='contactReason'
              value={values.contactReason}
              onChange={handleInputChange}
              options={['Job Opportunity', 'Design my Website', 'Other']}
            />
            <TextArea
              name='additionalDetails'
              label='Additional Details'
              value={values.additionalDetails}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.modalFooter}>
            {!isLoading ?
              <button className={buttonStyles.button} onClick={onSubmit}>Submit</button>
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlassModalForm