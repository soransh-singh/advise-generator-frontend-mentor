import { useState, useEffect } from 'react'
import dice from './images/icon-dice.svg'
//import divider from './images/pattern-divider-mobile.svg'
function Advice() {
  const [slip, setSlip] = useState("")

  const getSlip = async ()=>{
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()
    console.log(data.slip);
    setSlip(data.slip)
  }
  useEffect(()=>{
    getSlip()
  }, [])
  return(
    <main className="container">
      <div className="slip">
        <h1  className="slip__title">Advice # {slip.id}</h1>
        <p  className="slip__advice">"{slip.advice}"</p>
        <button
          onClick={getSlip}
          className="slip__btn">
          <img src={dice} alt=""/>
        </button>
      </div>
    </main>
  )
}

export default Advice
