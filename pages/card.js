import CardInfo from '@/Components/CardInfo'
import React, { useEffect } from 'react'
import {loadStripe} from '@stripe/stripe-js';
import {useState} from 'react'


const Card =  (props) => {
    let {Plan} = props

    let clientSecret = `pk_test_51NdmP3SC0jl6UVyT6UGBRoITBtnbjtpIulYa6Oqbbil8ASh8a8YskPihjH6bBFaMc7BdrIVUf0PTMaS2MAZhFKAz00cBIzcMvv`

    const [Stripe, setStripe] = useState('')

    useEffect(() => {
      let stripepromise = null
      if (!stripepromise) {
        const data = async () => {
          stripepromise = await loadStripe(clientSecret);
          setStripe(stripepromise)
        }
        data()
      } else {
        setStripe(stripepromise)
      }
    }, [])
    
  return (
    <div>
        <CardInfo Stripe={Stripe} Plan={Plan} clientSecret={clientSecret} />
    </div>
  )
}

export default Card