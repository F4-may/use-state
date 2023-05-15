import React, {useState} from "react";


const Counter1 = () => {

      let [count, setCount] = useState({gold:0, silver:0, bronze:0}) 
      let {gold, silver, bronze} = count

      console.log(count)

      // count = {gold:0, silver:0, bronze:0}
      // count = 1
      // count = {gold:1, silver:0, bronze:0}

            function increaseGold() {
                //   setCount({gold: count.gold+1, silver:count.silver, bronze:count.bronze})
                //   setCount(gold+1)
                 setCount({...count, gold:gold+1})
            }
            function increseSilver() {
                //   setCount({gold: count.gold, silver:count.silver+1, bronze:count.bronze})
                setCount({...count, silver:silver+1})
            }

      return(
             <div>
                  
                  <h1> Gold: {count.gold} </h1>
                  <h1> Silver: {count.silver} </h1>
                  <h1> Bronze: {count.bronze} </h1>

                
                  <button onClick={increaseGold}> Increase Gold </button>
                  <button onClick={increseSilver}> Increase Silver </button>
                  <button> Increase Bronze </button>

             </div>



      )


}

export default Counter1;
