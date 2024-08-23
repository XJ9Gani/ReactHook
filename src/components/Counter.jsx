import { useState } from "react"

export default function Counter(){
    let [count , setCount] = useState(0);

    const incrementValue = () => {
        setCount(prevValue => prevValue + 1);
    }
    const decrimentValue = () => {
        setCount(prevValue => prevValue - 1);
    }
    return(
        <>
        <div style={{width:'200px',margin:"auto" ,display:"flex" , justifyContent:"space-around" , gap:"20px"}}>
        <button onClick={incrementValue}>+</button>
        <button onClick={decrimentValue}>-</button>
        </div>
        <h1 style={{width:'200px',margin:"auto"}}>{count}</h1>
        </>
    )
};