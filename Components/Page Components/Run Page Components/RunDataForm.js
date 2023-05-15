import { useState } from 'react'
import GlassLoader from '../../Global Components/GlassLoader'
import Input from '../../Form Components/Input'
import { createRun } from '../../../pages/api/runAPI'
import styles from '@/styles/Page Component Styles/Index Styles/GlassModalForm.module.css'
import buttonStyles from '@/styles/Global Component Styles/Button.module.css'

const initValues = {
  date: '',
  runTime: '',
  runDistance: '',
  avgPace: '',
  avgHeartRate: '',
  activeCalories: '',
  totalCalories: ''
}

const initState = { values: initValues }

const RunDataForm = ({ closeModal }) => {
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
      await createRun(values)
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
            <h1>Input Run Data</h1>
          </div>
          {error && (<div style={{ display: 'flex', justifyContent: 'center', color: 'red' }}>{error}</div>)}
          <div className={styles.modalBody}>
            <Input
              type='date'
              id='date'
              name='date'
              label='Run Data'
              value={values.date}
              onChange={handleInputChange}
            />
            <Input
              type='text'
              id='runTime'
              name='runTime'
              label='Run Time'
              value={values.runTime}
              onChange={handleInputChange}
            />
            <Input
              type='number'
              id='runDistance'
              name='runDistance'
              label='Run Distance'
              value={values.runDistance}
              onChange={handleInputChange}
            />
            <Input
              type='text'
              id='avgPace'
              name='avgPace'
              label='Average Pace'
              value={values.avgPace}
              onChange={handleInputChange}
            />
            <Input
              type='number'
              id='avgHeartRate'
              name='avgHeartRate'
              label='Average Heart Rate'
              value={values.avgHeartRate}
              onChange={handleInputChange}
            />
            <Input
              type='number'
              id='activeCalories'
              name='activeCalories'
              label='Active Calories Burned'
              value={values.activeCalories}
              onChange={handleInputChange}
            />
            <Input
              type='number'
              id='totalCalories'
              name='totalCalories'
              label='Total Calories Burned'
              value={values.totalCalories}
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

export default RunDataForm