import StepCompleteIndicator from './StepCompleteIndicator.jsx'
import ShowMessage from './ShowMessage.jsx'
import DesignButton from './DesignButton.jsx'

function Divcontainer() {
    const step = 1
    return (
        <>
            <div className='steps'>
                <StepCompleteIndicator step={step}/>
                <ShowMessage step={step}/>
                <div className='buttons'>
                    <DesignButton text={"Previous"}/>
                    <DesignButton text={"Next"}/>
                </div>
            </div>
        </ >
    )
}

export default Divcontainer