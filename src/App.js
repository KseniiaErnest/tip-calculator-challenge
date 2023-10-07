import { useState } from "react"

export default function App() {
  return (
    <div>
<TipCalc />
    </div>
  )
}

 function TipCalc() {
  const [bill, setBill] = useState('');
  const [perc1, setPerc1] = useState(0);
  const [perc2, setPerc2] = useState(0);

  const tip = bill * ((perc1 + perc2) / 2 / 100);

  const handleReset = () => {
    setBill('');
    setPerc1(0);
    setPerc2(0);
  }


 
  
  return (
    <div>
      <Bill bill={bill} onSetBill={setBill} />
      <Percentage perc={perc1} OnSetPerc={setPerc1}>How did you like the service?</Percentage>
      <Percentage perc={perc2} OnSetPerc={setPerc2}>How did your friend like the service?</Percentage>


      {bill > 0 && (
        <>
        <Output bill={bill} tip={tip} />
      <ResetButton onReset={handleReset} />

      </>
      )
        }

    </div>
  )
}

function Bill({ bill, onSetBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input placeholder="Bill value" value={bill} onChange={(e) => onSetBill(Number(e.target.value))} />
    </div>
  )
}

function Percentage({ children, perc, OnSetPerc }) {
  return (
    <div>
      <span>{children}</span>
      <select value={perc} onChange={(e) => OnSetPerc(Number(e.target.value))}>
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>It was ok (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>Absolutely amazing! (20%)</option>
      </select>
    </div>
  )
}

function Output({ bill, tip }) {
  return (
    <div>
      <h2>You pay ${bill + tip} (${bill} + ${tip} tip)</h2>
    </div>
  
  )
}

function ResetButton({ onReset }) {
  return (
    <button onClick={onReset}>Reset</button>
  )
}
