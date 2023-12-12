import axios from 'axios';
export const getAllPizzas=()=> async(dispatch)=>{
    dispatch({type:'GET_PIZZAS_REQUEST'});
    try {
        const res =  await axios.get('/api/pizzas/getAllPizzas')
        console.log(res)
        dispatch({type:'GET_PIZZAS_SUCCESS', payload:res.data})
        
    } catch (err) {
        dispatch({type:'GET_PIZZAS_FAIL', payload:err})
        
    }
}

export const addPizza=(pizza)=> async(dispatch)=>{
    dispatch({type:'ADD_PIZZAS_REQUEST'});
    try {
        const res =  await axios.get('/api/pizzas/addpizza',{pizza})
    
        dispatch({type:'ADD_PIZZAS_SUCCESS', payload:res.data})
        
    } catch (err) {
        dispatch({type:'ADD_PIZZAS_FAIL', payload:err})
        
    }
}