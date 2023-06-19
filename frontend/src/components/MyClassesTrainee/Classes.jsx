import React from 'react'
const Classes=({classes}) => {

    {classes?.map((curclass)=> {
        const{ClassName,TrainerName}=curclass;
        return(
            <tr>
                <td>{ClassName}</td>
                <td>{TrainerName}</td>
            </tr>
        )
    
    })


}
}





export default Classes ;
