import React from 'react'
const Ex=({exercises}) => {

    {exercises?.map((curEx)=> {
        const{ExerciseName}=curEx;
        return(
            <tr>
                <td>{ExerciseName}</td>
                
            </tr>
        )
    
    })


}
}





export default Ex ;
