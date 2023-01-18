import React from 'react'
import ReactSelect from 'react-select'
import Layout from '../../common/Layout'

import bgImage from '../../../images/new-workout-bg.jpg'
import Feild from '../../ui/Feild/Feild'
import Button from '../../ui/Button/Button'

import styles from '../NewWorkout/NewWorkout.module.scss'


const NewWorkout = () => {
  const [name, setName] = React.useState('')
  const [exercises, setExercises] = React.useState([])

  const handleSubmit = () =>
  {
    console.log('submit')
  }
  return (
  <>
    <Layout bgImage={bgImage} heading ='Create new workout' />
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <Feild 
            placeholder='Enter name' 
            value={name} 
            onChange={e => setName(e.target.value)}
            required  
            /> 
            <ReactSelect
              classNamePrefix='select2-selection'
              placeholder='Exercises...'
              title='Exercises'
              options={[
                { value:'dgfdfg', label: 'Puss-ups' },
                { value:'fgdfgdf', label: 'Pull-ups' },
              ]}
             value={exercises}
             onChange={setExercises} 
             isMulti={true}
            />
          <Button text = 'Create' callback={()=>{}}/>
       </form>
      </div>
  </>
  )
}

export default NewWorkout