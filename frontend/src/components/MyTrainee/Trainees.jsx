import React from 'react'
const Trainees=({Trainer}) => {

    {Trainer?.map((curtrainee)=> {
        const{TraineeName,ClassName}=curtrainee;
        return(
            <tr>
                <td>{TraineeName}</td>
                <td>{ClassName}</td>
                
            </tr>
        )
    
    })


}
}





export default Trainees ;
