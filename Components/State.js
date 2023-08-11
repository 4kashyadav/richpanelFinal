import styles from '@/Components/styles/State.module.css'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const State = (props) => {
  let status = props.status
  const router = useRouter()
  const [plan, setplan] = useState('')
  let price

  useEffect(() => {
    let MyAppPaymentMethod = JSON.parse(localStorage.getItem('MyAppUser'))
    if(MyAppPaymentMethod) {
      price = MyAppPaymentMethod.paymentIntent.amount/100
    }
    
    if(price == 100) {
      setplan(()=>{return {pln:'Mobile', cycle:'Monthly', type:'Phone+Tablet', price}})
    } else if(price == 200) { 
      setplan(()=>{return {pln:'Basic', cycle:'Monthly', type:'Phone+Tablet+Computer+TV', price}})
    } else if(price == 500) {
      setplan(()=>{return {pln:'Standard', cycle:'Monthly', type:'Phone+Tablet+Computer+TV', price}})
    } else if(price == 700) {
      setplan(()=>{return {pln:'Premium', cycle:'Monthly', type:'Phone+Tablet+Computer+TV', price}})
    } else if(price == 1000) {
      setplan(()=>{return {pln:'Mobile', cycle:'Yearly', type:'Phone+Tablet', price}})
    } else if(price == 2000) {
      setplan(()=>{return {pln:'Basic', cycle:'Yearly', type:'Phone+Tablet+Computer+TV', price}})
    } else if(price == 5000) {
      setplan(()=>{return {pln:'Standard', cycle:'Yearly', type:'Phone+Tablet+Computer+TV', price}})
    } else if(price == 7000) {
      setplan(()=>{return {pln:'Premium', cycle:'Yearly', type:'Phone+Tablet+Computer+TV', price}})
    }
  }, [])


  return (
    <>
      <div className={`${styles.bg}`}>
        {
          plan && 
        <div className={`col-6`}>
          <div className={`${styles.card} py-3 px-3`}>
            <div className={`row`}>
              <div className={`col-8`}>
                <h5>
                  Current Plan Details 
                  {
                    status ? <span className="badge ms-2" style={{color: '#4b7bbd', background: '#bedafc'}}>Active</span> : <span className="badge ms-2" style={{color: '#e47470', background: '#f8e5e5'}}>Cancelled</span>
                  }
                  
                </h5>
              </div>
              {
                status ? 
                <div className={`col-4`}>
                  <p onClick={()=>{
                    router.push('/cancelled')
                  }} className="text-end" style={{fontSize: '14px', color: '#5074a9', fontWeight: '800', cursor: 'pointer'}}>Cancel</p>
                </div> : ''
              }
              
            </div>
            <div>
              <div className={`${styles.planName}`}>
                <span className="mt-3" style={{textTransform:'capitalize'}}>{plan.pln}</span>
              </div>
              <div className={`${styles.planRes}`}>
                <span className="mt-3">{plan.type}</span>
              </div>
              <div className={`${styles.planPrice}`}>
                <span className="mt-3">₹ {plan.price}.00/{plan.cycle}</span>
              </div>
              <div>
                {
                  status ? 
                  <button onClick={()=>{
                    router.push('/price')
                  }} className={`btn btn-outline-primary ${styles.changePlan} mt-2 mb-3`}>Change Plan</button> : <button onClick={()=>{
                    router.push('/price')
                  }} className={`btn btn-outline-primary ${styles.changePlan} mt-2 mb-3`}>Choose Plan</button>
                }
              </div>
            </div>
            <div className={`${styles.note} px-2 py-1`}>
              {
                status ? <span>Your Subscription has started on Aug 10th, 2023 and will auto renew on Aug 10th, 2024.</span> : <span>Your Subscription was cancelled and you will loose access to the services.</span>
              }
            </div>

          </div>
        </div>
}
      </div>
    </>
  )
}

export default State