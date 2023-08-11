import React, { useEffect } from 'react'
import styles from '@/Components/styles/Login.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Signup = (props) => {
  const router = useRouter()
  useEffect(() => {
    let MyAppUser = localStorage.getItem('MyAppUser')
    if(MyAppUser) {
      router.push('/price')
    }
  }, [])
  

  let {SignupDetailHandler, SignupDetails, SignupHandler} = props
  return (
    <div className={`row ${styles.background} d-flex justify-content-center align-items-center`}>
      <div className='col-md-5 col-10 pt-5 pb-4 border my-5 mx-auto' style={{background:"#fff", borderRadius:'16px', boxShadow:'2px 2px 12px 12px #1b4a8f'}}>
            <h4 className='text-center mb-4'>Create Account</h4>
            <div className='mx-5 mt-3'>
              <label htmlFor="Name" style={{fontWeight: '600'}} className='fs-6'>Name</label><br />
              <input type="text" className={`col-12 mt-1 ${styles.input}`} name="name" onChange={SignupDetailHandler} value={SignupDetails.name} id="Name" />
            </div>
            <div className='mx-5 mt-3'>
              <label htmlFor="Email" style={{fontWeight: '600'}} className='fs-6'>Email</label><br />
              <input type="text" className={`col-12 mt-1 ${styles.input}`} name="email" onChange={SignupDetailHandler} value={SignupDetails.email} id="Email" />
            </div>
            <div className='mx-5 mt-3'>
              <label htmlFor="Password" style={{fontWeight: '600'}} className='fs-6'>Password</label><br />
              <input type="password" className={`col-12 mt-1 ${styles.input}`} name="password" onChange={SignupDetailHandler} value={SignupDetails.password} id="Password" />
            </div>
            <div className='mx-5 mt-3'>
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className='ms-2'>Remember Me</label>
            </div>
            <div className='mx-5 mt-3'>
              <button className='btn btn-primary col-12 py-2' onClick={SignupHandler} style={{background: '#1f4d91'}}>Sign Up</button>
            </div>
            <div>
              <p className={`text-center mt-3 pb-0 mb-0 ${styles.alreadyMember}`}>
                Already have an account? 
                <Link href={'/login'} legacyBehavior>
                  <a style={{color: '#1f4d91'}}>Login</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
  )
}

export default Signup