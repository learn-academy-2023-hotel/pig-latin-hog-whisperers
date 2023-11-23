import React, { useState } from "react"
import "./App.css"
import butcherPigImage from "./assets/butcherPig.jpeg"

const App = () => {
  
  const [userInput, setUserInput] = useState(
    ""
  )
  const [inputTranslated, setInputTranslated] = useState("")

  const myPigLatinCodeHere = () => {
  
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord)


      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      //  Pig Latin logic 
      if (eachWord.charAt(0).includes(vowelsArray[0])) {
        return eachWord + "way"
      } else if (eachWord.charAt(0) === "q") {
        return eachWord.slice(2) + "quway"
      } else if (eachWord.includes("squ")) {
        return eachWord.slice(3) + "squway"
      } else if (eachWord.charAt(eachWord.length - 1) === "y" &&
      eachWord.includes(vowelsArray)) {
        return eachWord.slice(eachWord.length - 1) + eachWord.slice(0, -1) + "ay"
      } else if (eachWord.indexOf(vowelsArray) !== 0) {
        return eachWord.slice(eachWord.indexOf(vowelsArray[0])) + eachWord.slice(0, eachWord.indexOf(vowelsArray[0])) + "ay"
      } else {
        return "oink"
      }
    })

    //once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    //  this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  const restartGame = () => {
    setUserInput("")
    setInputTranslated("")
  }

  //  prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  //takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <div className="input-section">
          <h4>Type in words to translate them to Pig Latin</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2023 | Jonathan Raya</footer>
    </div>
  )
}

export default App


