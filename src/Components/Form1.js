import React, {useState} from 'react';

const Form1 = ({updateName}) =>{

    // props = {updateName:f-setNAme}
    
     
    return(
        <div>
            <form>
                <input type="text" 
                placeholder="Enter your name"
                name="name" 
                onChange={(e) => updateName(e.target.value)}
                /> 
                
            </form>
           
               
        </div>
    )
}

export default Form1;