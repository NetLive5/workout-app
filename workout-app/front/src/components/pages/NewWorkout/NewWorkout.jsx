import React from 'react'
import Layout from '../../common/Layout'

import bgImage from '../../../images/new-workout-bg.jpg'
import Feild from '../../ui/Feild/Feild'
import Button from '../../ui/Button/Button'

import styles from '../NewWorkout/NewWorkout.module.scss'


const NewWorkout = () => {
  const [name, setName] = React.useState('')
  //const [exercises, setExercises] = React.useState([])

  const handleSubmit = () =>
  {
    console.log('submit')
  }
  return (
  <>
    <Layout bgImage={bgImage} />
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <Feild 
            placeholder='Enter name' 
            value={name} 
            onChange={e =>setName(e.target.value)}/> 
            {/*React Select*/}
          <Button text = 'Create' callback={()=>{}}/>
       </form>
      </div>
  </>
  )
}

export default NewWorkout