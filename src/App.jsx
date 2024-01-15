import UserInput from "./components/UserInput"
import Header from "./components/Header"
import Results from "./components/Results"
import { useState } from "react"

const INITIALVALUE = {
  'initialInvestment': 69,
  'annualInvestment': 420,
  'expectedReturn': 50,
  'duration': 1,

}



function App() {
  const [inputValue, setInputValue] = useState(INITIALVALUE)
  const validState = inputValue.duration;

  function HandleChange(name, value) {
    setInputValue(prevState => {
      return {
        ...prevState,
        [name]: +value

      }
    })
  }
  return (
    <div>
      <Header></Header>
      <UserInput
        onValueChange={HandleChange}
        inputValue={inputValue}
      ></UserInput>
      {
        validState ? <Results value={inputValue}></Results> : <p className="center">Enter a valid duration!</p>
      }


    </div>
  )
}

export default App
