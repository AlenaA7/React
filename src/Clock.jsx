import { useState, useEffect } from 'react';
import StyledButton from './StyledButton';

export default function Clock() {
    const workTime = 25
    const relaxTime = 5
    const bigRelaxTime = 15
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(workTime);
    const [count, setCount] = useState(1);
    const [B, setB] = useState(true);
  
    useEffect(() => {
      const id = setInterval(() => {
        if (!B) {return;}
        if (second === 0  && minute === 0){
          setCount(count+1)
          if (count === 3){
            setMinute(bigRelaxTime);
          }else{          
            setMinute(relaxTime);
          }
        } else if (second===0){
          setSecond(59);
          setMinute(minute-1);
        } else{setSecond(second-1)}
        
      }, 1000)
      return ()  => {
      clearInterval(id)
    }
  })
  
    function click(){
    setB(!B)
    }
    return (
      <>
      <h1>{minute} : {second}</h1>
      <StyledButton tex={B ? "||" : ">"} bla={click}/>
      </>
    )
  }
  
