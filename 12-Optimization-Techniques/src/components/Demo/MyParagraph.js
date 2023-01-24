import React from 'react'

const MyParagraph = (props) => {
  console.log("Button RUNNING")

  return (
    <p>{props.children}</p>
  )
}

export default MyParagraph