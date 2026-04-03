import { useState } from "react"

function Child() {
    //   let count = 10;



    const [count, setCount] = useState(0)


    // function clickHandler(){
    //     // console.log('first')
    //   count = count + 1
    //     // console.log(count)

    //      setCount(count+1)

    // }
    // console.log(count)

    function plusHandler() {
        setCount(count + 1)
    }

    function minusHandler() {
        setCount(count - 1)

    }

    function resetHandler() {

        setCount(0)
    }
    return (
        <div>
            <p>{count}</p>

            <button onClick={plusHandler}>+</button>
            <button onClick={resetHandler}>Reset</button>
            <button onClick={minusHandler}>-</button>


        </div>
    )
}

export default Child