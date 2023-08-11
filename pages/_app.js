import '@/styles/globals.css'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [SignupDetails, setSignupDetails] = useState({'name': '', 'email': '', 'password': ''})
  const [Plan, setPlan] = useState('')
  const [LoginData, setLoginData] = useState({'email': '', 'password': ''})

  const SignupDetailHandler = (e) => {
    if(e.target.name === 'name') {
      setSignupDetails({...SignupDetails, 'name': e.target.value})
    } else if(e.target.name === 'email') {
      setSignupDetails({...SignupDetails, 'email': e.target.value})
    } else if(e.target.name === 'password') {
      setSignupDetails({...SignupDetails, 'password': e.target.value})
    }
  }

  const LoginSubmitHandler = () => {
    if(LoginData.email != '') {
      if(LoginData.password != '') {
        fetch('/api/login-user', {
          method: 'POST',
          body: JSON.stringify(LoginData),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .then(data => {
          if(data) {
            localStorage.setItem('MyAppUser', JSON.stringify(data))
            router.push('/price')
          } else {
            alert('Invalid email or password')
          }
        })
      } else {
        alert('Please enter password')
      } 
    } else {
      alert('Please enter email')
    }
  } 

  const SignupHandler = () => {
    if(SignupDetails.name != '') {
      if(SignupDetails.email != '') {
        if(SignupDetails.password != '') {
          fetch('/api/create-user', {
            method: 'POST',
            body: JSON.stringify(SignupDetails),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(data => {
            localStorage.setItem('MyAppUser', JSON.stringify(data))
            router.push('/price')
          })
        } else {
          alert('Please enter password')
        } 
      } else {
        alert('Please enter email')
      }
    } else {
      alert('Please enter name')
    }
  }

  return <Component {...pageProps} SignupDetailHandler={SignupDetailHandler} SignupDetails={SignupDetails} SignupHandler={SignupHandler} Plan={Plan} setPlan={setPlan} LoginData={LoginData} setLoginData={setLoginData} LoginSubmitHandler={LoginSubmitHandler} />
}
