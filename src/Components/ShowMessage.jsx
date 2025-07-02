import React from 'react'
import "./index.css"
import {messages} from "../../public/data.js"
function ShowMessage({step}) {
  return (
    <>
      <p className='message'>{messages[step-1]}</p>
    </>
  )
}

export default ShowMessage