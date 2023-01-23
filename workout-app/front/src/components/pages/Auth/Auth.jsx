import React from 'react'

import Layout from '../../common/Layout'

import bgImage from '../../../images/auth-bg.png'
import Feild from '../../ui/Feild/Feild'
import Button from '../../ui/Button/Button'

import styles from './Auth.module.scss'
import Alert from '../../ui/Alert/Alert'

import { useMutation } from 'react-query'
import { $api } from '../../../api/api'
import Loader from '../../ui/Loader'




const Auth = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [type, setType] = React.useState('') //auth || reg

  const {
    mutate: register,
    isLoading,
    error,
   
  } = useMutation('Registration', () => 
  $api({
    url:'/users', 
    type:'POST', 
    body:{email, password}, 
    auth: false
  }), {
    onSuccess(data){
      localStorage.setItem('token', data.token)
    },
  }
  
)

  const handleSubmit = e =>{
    e.preventDefault()

    if(type === 'auth'){
    console.log('Auth')
    }
    
    else{
      register()
    }
  }

 

  return (
  <>
    <Layout bgImage={bgImage} heading ='Auth || Register' />
      <div className='wrapper-in-page'>
      {error && <Alert type='error' text={error}/>}
      {isLoading && <Loader/>}
        <form onSubmit={handleSubmit}>
          <Feild 
            type='email'
            placeholder='Enter email' 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required
            />
            <Feild 
            placeholder='Enter password' 
            value={password} 
            onChange={({target:{value}})=>setPassword(value)} 
            required
            />  
          <div className={styles.wrapperButtons}>
          <Button text ='Sing in' callback={()=>setType('auth')}/>
          <Button text ='Sing up' callback={()=>setType('reg')}/>
          </div>
       </form>
      </div>
  </>
  )
}

export default Auth