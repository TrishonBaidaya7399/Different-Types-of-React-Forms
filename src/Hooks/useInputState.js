import { useState } from "react"

const useInputState = (defaultValue='')=>{
const [inputValue, setInputValue]= useState(defaultValue);
const onChange = e =>{ 
    setInputValue(e.target.value);
}
return {
    inputValue,
    onChange,
}
}
export default useInputState;