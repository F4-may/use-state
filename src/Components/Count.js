import React, {useState} from "react";

const Count=()=>{
    let [a,setA]=useState(0);
    
    // function increase1(){
        
    //     setA(a+1)
    //     setA(a+1)
    //     console.log("value of a", a);
    // }

    function increase2()
    {
        setA(prevA=>prevA+1)
        setA(prevA=>prevA+1)
        console.log("value of a", a);

    }


    return(
        <div>
            <h1>Count : {a}</h1>
            <button onClick={increase2}>Increase</button>
        </div>
    )
}




export default Count