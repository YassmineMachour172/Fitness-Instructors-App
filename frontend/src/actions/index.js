export const SIGN_IN = () =>{
    return {
        type:'SIGN_IN'
    }
};

export const setEmail = (email) =>{
    return {
        type:'setEmail',
        email:email
    }
};
export const getEmail = () =>{
    return {
        type:'getEmail'
    }
};