import React, { useState } from "react"
import { createContainer } from "unstated-next"
import { render } from "react-dom"



function useCounter(initialState = 0) {
  let [items, setItems] = useState(initialState)
  
 
  return {items, setItems}
}

export default createContainer(useCounter)