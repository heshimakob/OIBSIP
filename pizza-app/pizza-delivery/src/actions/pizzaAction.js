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
};

export const addPizza=(pizza)=> async(dispatch)=>{
    dispatch({type:'ADD_PIZZAS_REQUEST'});
    try {
        const res =  await axios.post('/api/pizzas/addpizza',{pizza})
    
        dispatch({type:'ADD_PIZZAS_SUCCESS'})
        console.log(res)
        
    } catch (err) {
        dispatch({type:'ADD_PIZZAS_FAIL', payload:err})
        
    }
};
export const getPizzabyId=(pizzaId)=> async(dispatch)=>{
    dispatch({type:'GET_PIZZABYID_REQUEST'});
    try {
        const res =  await axios.post('/api/pizzas/getpizzabyid',{pizzaId})
    
        dispatch({type:'GET_PIZZABYID_SUCCESS', payload:res.data})
    
        
    } catch (err) {
        dispatch({type:'GET_PIZZABYID_FAIL', payload:err})
        
    }
};
export const filterPizza =(searchkey,category)=>async dispatch=>{
    let filterPizza;
    dispatch({type:'GET_PIZZAS_REQUEST'})
    try {
        const res= await axios.get("/api/pizzas/getAllPizzas")
        filterPizza=res.data.filter(pizza=>pizza.name.toLowerCase().includes(searchkey));
        if(category !=='all'){
            filterPizza=res.data.filter(pizza=>pizza.category.toLowerCase()=== category);
        }
        dispatch({type:'GET_PIZZAS_SUCCESS', payload:filterPizza})
        
    } catch (error) {
        dispatch({type:"GET_PIZZAS_FAIL", payload:error})
        
    }
}