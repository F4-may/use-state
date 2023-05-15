import React, {useState} from "react";

const Count1=()=>{
let [a,setA]=useState(()=>{
    console.log("hello");
    return 3+4
})

function increase2(){
    setA(a+1)
}

    return(
        <div>
            <h1>Count: {a}</h1>
            <button onClick={increase2}>Increase</button>
        </div>
    )
}

export default Count1