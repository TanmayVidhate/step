import "./index.css"
function DesignButton({onButtonClick , children}) {
    return (
        <>
            <button  onClick={onButtonClick}>{children}</button>
        </>
    )
}

export default DesignButton;