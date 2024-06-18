import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";
import Results from "./components/Results";
function App() 
{
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });
  function handleChange(inputIdentifier, newValue) 
  {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,//+convert string to a number
      };
    });
}
    return (
      <>
        <Header />
        <UserInput userInput={userInput} onChange={handleChange}/>
        <Results input={userInput} />
      </>
    );
  
}
  export default App
