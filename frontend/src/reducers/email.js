const emailReducer = (state=null, action) => {
    switch(action.type){
        case 'setEmail':
            return action.email;
        case 'getEmail':
            return {
                email:action.email
            };
        default:
            return state;
    }
};
export default emailReducer;