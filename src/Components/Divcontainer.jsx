import {messages} from "../../public/data.js"
import StepCompleteIndicator from './StepCompleteIndicator.jsx'
import ShowMessage from './ShowMessage.jsx'
import DesignButton from './DesignButton.jsx'
import { useState } from 'react'

function Divcontainer() {

    let [step,setStep] = useState(1)
    const [isOpen,setIsopen] = useState(true)

    const increaseStep = () => {
        (step < 3) ? setStep((s) => s + 1) : "Limit is Exceding"
    }

    const decearseStep = () => {
        (step > 1 ) ? setStep((s) => s - 1) :"Limit is decreasing"
    }

    return (
        <>
            <button className='close' onClick={()=>{setIsopen((isOpen) => !isOpen)}}>&times;</button>
            {isOpen ?
                <div className='steps'>
                    <StepCompleteIndicator step={step}/>
                    <ShowMessage>{messages[step-1]}</ShowMessage>
                    <div className='buttons'>
                        <DesignButton onButtonClick={()=>{decearseStep()}}> <span>👈</span> Previous</DesignButton>
                        <DesignButton onButtonClick={()=>{increaseStep()}}> Next <span>👉</span> </DesignButton>
                    </div>
                </div>
                :
                <h1 className='close-message'>Div is close 😜...</h1>
            }
        </ >
    )
}

export default Divcontainer