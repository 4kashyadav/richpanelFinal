import React, { useRef, useState } from 'react'
import styles from '@/Components/styles/Card.module.css'
import {Elements} from '@stripe/react-stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import { useElements } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';

const Stripee = require('stripe');
const stripe = Stripee('sk_test_51NdmP3SC0jl6UVyTcZhwEHF5uVEriRVSYZWgwyI8mmt9XPPcZJLyh1YOIMhyi63TTZOMsAtcNJRhCoUqHyd9TWl200hIPthmoI');


const Wrapper = (props) => {
    return (
        <>
            {
                props.Stripe && (
                    <Elements stripe={props.Stripe}>
                        <CardInfo {...props} />
                    </Elements>
                )
            }
        </>
    )
}
  
const CardInfo = (props) => {
    let {Plan, Stripe} = props
    let price = 0

    let userData = localStorage.getItem('MyAppUser')

    const router = useRouter()
    const elements = useElements();
    let priceId
    
    if(Plan.cycle == 'monthly') {
        if(Plan.plan === 'mobile') {
            price = 100
            priceId = 'price_1NdSJVSASbTjQH3WKZcIeIcu'
        } else if(Plan.plan === 'basic') {
            price = 200
            priceId = 'price_1NdSJnSASbTjQH3W9OW8hTKg'
        } else if(Plan.plan === 'standard') {
            price = 500
            priceId = 'price_1NdSKASASbTjQH3WbrXcQrYa'
        } else if(Plan.plan === 'premium') { 
            price = 700
            priceId = 'price_1NdSKOSASbTjQH3WY0vCunUd'
        }
    } else if(Plan.cycle == 'yearly') {
        if(Plan.plan === 'mobile') {
            price = 1000
            priceId = 'price_1NdSKgSASbTjQH3W9za2dl6J'
        } else if(Plan.plan === 'basic') {
            price = 2000
            priceId = 'price_1NdSKxSASbTjQH3WdbCwUW2J'
        } else if(Plan.plan === 'standard') {
            price = 5000
            priceId = 'price_1NdSLCSASbTjQH3WW4pdgR8a'
        } else if(Plan.plan === 'premium') { 
            price = 7000
            priceId = 'price_1NdSLUSASbTjQH3WC5Uw5qrC'
        }
    }

    const checkOut = async () => {
        const {paymentMethod, error} = await Stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
            billing_details: {
                name: userData. name,
            },
        });

        const paymentIntent = await stripe.paymentIntents.create({
            amount: price*100,
            currency: 'inr',
            automatic_payment_methods: {enabled: true},
        });

        const res = await Stripe.confirmCardPayment(paymentIntent.client_secret, {
            payment_method: paymentIntent.id,
        });

        if(res.error) {
            console.log(res.error)
        } else {
            console.log(res)
            localStorage.setItem('MyAppUser', JSON.stringify(res))
            router.push('/successfull?success='+res.paymentIntent.id)
        }
    }
  return (
    <>
        <div className={`${styles.bg} d-flex justify-content-center align-items-center`}>
            <div className='col-md-10 col-lg-8'>
                <div className={`${styles.card} row`}>
                    <div className={`col-8 ${styles.cardLeft} py-5`}>
                        <div className='col-10 mx-auto'>
                            <h2>Complete Payment</h2>
                            <p>Enter your credit or debit card details below</p>
                        </div>
                        <div className={`${styles.cardInfoBox} row col-10 mx-auto`}>
                            <CardElement />
                        </div>
                        <div className='col-10 mx-auto'>
                            <button className='btn btn-primary py-1 mt-3' onClick={()=>{
                                checkOut()
                            }} style={{ background: "#1f4d91" }}>Confirm Payment</button>
                        </div>
                    </div>
                    <div className={`col-4 ${styles.cardRight} py-5`}>
                        <div className='row'>
                            <div className='col-12'>
                                <h5>Order Summary</h5>
                            </div>
                            <div className='col-12 mt-3 px-4'>
                                <div className='row py-1' style={{borderBottom: '1px solid #e6e6e6'}}>
                                    <div className='col-6'>
                                        <span>Plan Name</span>
                                    </div>
                                    <div className='col-6 text-end'>
                                        <b>{Plan.plan}</b>
                                    </div>
                                </div>
                                <div className='row py-1' style={{borderBottom: '1px solid #e6e6e6'}}>
                                    <div className='col-6'>
                                        <span>Billing Cycle</span>
                                    </div>
                                    <div className='col-6 text-end'>
                                        <b>{Plan.cycle}</b>
                                    </div>
                                </div>
                                <div className='row py-1'style={{borderBottom: '1px solid #e6e6e6'}}>
                                    <div className='col-6'>
                                        <span>Plan Price</span>
                                    </div>
                                    <div className='col-6 text-end'>
                                        <b>₹ 
                                            {
                                                price
                                            }
                                            /{Plan.cycle.substr(0,2)}
                                        </b>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Wrapper