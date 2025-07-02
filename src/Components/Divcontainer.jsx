import StepCompleteIndicator from './StepCompleteIndicator.jsx'
import ShowMessage from './ShowMessage.jsx'
import DesignButton from './DesignButton.jsx'

function Divcontainer() {
    return (
        <>
            <div className='steps'>
                <StepCompleteIndicator/>
                <ShowMessage/>
                <div className='buttons'>
                    <DesignButton text={"Previous"}/>
                    <DesignButton text={"Next"}/>
                </div>
            </div>
        </ >
    )
}

export default Divcontainer