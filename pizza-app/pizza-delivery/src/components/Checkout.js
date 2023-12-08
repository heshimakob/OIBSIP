import React from 'react'
import { Button } from 'react-bootstrap'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch } from 'react-redux'
import { placeOrder } from '../actions/orderAction'

const Checkout = ({subTotal}) => {
    const dispatch=useDispatch()
    const tokenHandler =(token)=>{
        dispatch(placeOrder(token,subTotal))
        console.log(token)
    }
  return (
   <StripeCheckout
   amount={subTotal *100}
   shippingAddress
   token={tokenHandler}
   stripeKey="pk_test_51OKwNHI6LpqwViK1HtYlVGjZTKE8XhRt8u4xi9Z0hHQWP6ezeA5aKk3YXf1nnHNoCP6EDkk2znYOT0ZEcTVqPcP100r1KFqDWb"
   currency='USD'
   >
    <Button>Pay now</Button>
   </StripeCheckout>
  )
}

export default Checkout