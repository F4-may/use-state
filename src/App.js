import React, {useState} from "react"; 
import Form1 from "./Components/Form1";
import Counter1 from "./Components/Counter2";
import Count from "./Components/Count";
import Count1 from "./Components/Count1"




const App = () => {
      
  // let [name, setName] = useState("")



  return(
      <div>
           {/* <Form1  updateName={setName}/>
           <p>{name}</p> */}
            {/* <Counter1 /> */}
            {/* <Count></Count> */}
            <Count1/>
      </div>
  )


}


export default App;























// import React,{useState} from "react"; 
// import Counter from "./Components/Counter";
// import Form from "./Components/Form";

// // console.log("Before App.js")
// // let a = 10


// const App = () => {
//     // let [coins, setCoins] = useState(100) // coins = 100 // state varibale

//     // helping you to change the state variable (reloading the componet, not reassiging the value again and again)
    
    
//     //  console.log("inside App.js")
   

//     // function increaseA(){
//     //      a++
//     //      console.log(a)
//     // }

//     // function increaseCoins(){
//     //     setCoins(coins+1)
//     // }

//   return(
//       <div>
//            {/* <h1>{a}</h1>
//           <button onClick={increaseA}> Change X</button>
//            <h1>{coins}</h1>
//           <button onClick={increaseCoins}> Change X</button> */}
//             {/* <Counter/> */}
//             <Form  x="hello"/>
//       </div>
//   )
// }

// export default App;