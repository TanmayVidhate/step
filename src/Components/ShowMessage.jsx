import React from 'react'
import "./index.css"

function ShowMessage({children}) {
  return (
    <>
      <p className='message'>{children}</p>
    </>
  )
}

export default ShowMessage