import React from 'react'
const Mess=({Messages}) => {

    {Messages?.map((curmessage)=> {
        const{ClassName,TraineeName}=curmessage;
        return(
            <tr>
                <td>{ClassName}</td>
                <td>{TraineeName}</td>
            </tr>
        )
    
    })


}
}





export default Mess ;
