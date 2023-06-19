import React from 'react'
const MyClasses=({classes}) => {

    {classes?.map((curclass)=> {
        const{ClassName}=curclass;
        return(
            <tr>
                <td>{ClassName}</td>
                
            </tr>
        )
    
    })


}
}





export default MyClasses ;
