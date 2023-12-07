export const registerUserReducer =(state={},action)=>{
    switch(action.type){
        case 'USER_REGISTER_REQUEST':
            return{
                loading:true
            }
            case 'USER_REGIISTER_SUCCESS':
                return {
                    loading:false,success:true
                }
                case 'USER_REGISTER_FAIL':
                    return{
                        loading:false,
                        error:action.payload
                    }
                    default:
                        return{state};
    }
    
};