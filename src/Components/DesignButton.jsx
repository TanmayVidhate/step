import "./index.css"
function DesignButton({text,onButtonClick}) {
    return (
        <>
            <button style={{backgroundColor:"#7950f2",color:"#fff"}} onClick={onButtonClick}>{text}</button>
        </>
    )
}

export default DesignButton;