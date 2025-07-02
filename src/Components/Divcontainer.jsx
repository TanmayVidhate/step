import StepCompleteIndicator from './StepCompleteIndicator.jsx'
import ShowMessage from './ShowMessage.jsx'
import DesignButton from './DesignButton.jsx'
import { useState } from 'react'

function Divcontainer() {
    let [step,setStep] = useState(1)

    const increaseStep = () => {
        setStep(step = step + 1)
    }

    const decearseStep = () => {
        setStep(step = step - 1)
    }
    return (
        <>
            <div className='steps'>
                <StepCompleteIndicator step={step}/>
                <ShowMessage step={step}/>
                <div className='buttons'>
                    <DesignButton text={"Previous"} onButtonClick={()=>{decearseStep()}}/>
                    <DesignButton text={"Next"} onButtonClick={()=>{increaseStep()}}/>
                </div>
            </div>
        </ >
    )
}

export default Divcontainer