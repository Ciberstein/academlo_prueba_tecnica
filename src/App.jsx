import { useState } from 'react'
import './App.css'
import { FirstStep } from './components/FirstStep'
import { StepBar } from './components/StepBar'
import { SecondStep } from './components/SecondStep'
import { ThirdStep } from './components/ThirdStep'

function App() {

  const [step, setStep] = useState(1)
  const [data, setData] = useState({})
  const [img, setImg] = useState({})

  const changeStep = e => {

    if (e)
      setStep(step + 1)
    else
      setStep(step - 1)
  }

  if(step === 1) {
    return (
      <div className='app'>
        <div className='container'>
          <StepBar step={step} />
          <FirstStep changeStep={changeStep} setData={setData} data={data} /> 
        </div>
      </div>
    )
  }
  else if(step === 2) {
    return (
      <div className='app'>
        <div className='container'>
          <StepBar step={step} />
          <SecondStep changeStep={changeStep} setImg={setImg}  />
        </div>
      </div>
    )
  }
  else if(step === 3) {
    return (
      <div className='app'>
        <div className='container'>
          <StepBar step={step} />
          <ThirdStep changeStep={changeStep} img={img} data={data} />
        </div>
      </div>
    )
  }
}

export default App
