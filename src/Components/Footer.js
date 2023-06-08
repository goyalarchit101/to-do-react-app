import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundCcolor: "red",
    color: "white",
    textAlign: "center"
  }
  return (
    <div>
      <div style={footerStyle} className='bg-dark text-light text-center'>Footer works</div>
    </div>
    
  )
}
