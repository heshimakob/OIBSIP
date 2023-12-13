// import React ,{useEffect}from 'react'
// import { useDispatch,useSelector } from 'react-redux'
// import { getPizzabyId } from '../../actions/pizzaAction'

// const EditPizza = ({match}) => {
//     const dispatch=useDispatch()
//     useEffect(()=>{
//         dispatch(getPizzabyId(match.params.id));
//     },[dispatch])
//   return (
//     <div>OrderList</div>
//   )
// }

// export default EditPizza 
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPizzabyId } from '../../actions/pizzaAction';
import Loader from '../../components/Loader'
import {Error} from '../../components/Error'
import Success from '../../components/Success'


const EditPizza = ({ match }) => {
const dispatch = useDispatch();


useEffect(() => {
dispatch(getPizzabyId(match.params.pizzaId));
}, [dispatch ]);


return (
<div>
Edit Pizza
</div>
);
}


export default EditPizza;