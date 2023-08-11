import Pricing from '@/Components/Pricing'
import React, { useState } from 'react'

const Price = (props) => {
  let {Plan, setPlan} = props
  const [PlanHandler, setPlanHandler] = useState("mobile");
  const [Duration, setDuration] = useState("monthly");

  return (
    <div>
        <Pricing Plan={Plan} setPlan={setPlan} PlanHandler={PlanHandler} setPlanHandler={setPlanHandler} Duration={Duration} setDuration={setDuration} />
    </div>
  )
}

export default Price