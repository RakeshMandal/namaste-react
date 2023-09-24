import React, { useMemo, useState } from 'react'


//useMoemo Example
const Demo = () => {
    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);

    const Increase1 = () =>{
        setCount1(count1+1)
    }
    const Increase2 = () =>{
        setCount2(count2+1)
    }

    const isEven = useMemo(() =>{
        let i=0;
        //while(i < 2000000000) i++
          return count1 % 2 === 0
      },[count1])

  return (
    <div>
    <div>
        <button onClick={Increase1} className=' p-2 m-2 border border-black bg-gray-500'>Increase1 Count</button>
        <span>{count1}</span>
        <span>{isEven? "Even Num" : "Odd Num"}</span>

    </div>
    <div>
    <button onClick={Increase2} className=' p-2 m-2 border border-black bg-gray-500'>Increase2 Count</button><span>{count2}</span>
    </div>
    </div>
  )
}

export default Demo