import StepCompleteIndicator from './StepCompleteIndicator.jsx'
import ShowMessage from './ShowMessage.jsx'
import DesignButton from './DesignButton.jsx'
import { useState } from 'react'

function Divcontainer() {

    let [step,setStep] = useState(1)
    const [isOpen,setIsclose] = useState(true)

    const increaseStep = () => {
        (step < 3) ? setStep(step = step + 1) : "Limit is Exceding"
    }

    const decearseStep = () => {
        (step > 1 ) ? setStep(step = step - 1) :"Limit is decreasing"
    }

    return (
        <>
            <button className='close' onClick={()=>{setIsclose(!isOpen)}}>&times;</button>
            {isOpen ?
                <div className='steps'>
                    <StepCompleteIndicator step={step}/>
                    <ShowMessage step={step}/>
                    <div className='buttons'>
                        <DesignButton text={"Previous"} onButtonClick={()=>{decearseStep()}}/>
                        <DesignButton text={"Next"} onButtonClick={()=>{increaseStep()}}/>
                    </div>
                </div>
                :
                <h1 className='close-message'>Div is close 😜...</h1>
            }
        </ >
    )
}

export default Divcontainer