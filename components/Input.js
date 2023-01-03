import styles from '../styles/Input.module.css'
import { Melding } from "../components/Meldinger"
import { useState } from 'react'

export default function Input(props) {
    const [userInput, setUserInput] = useState("")
    return (
      <div id={styles.input}>
        <textarea type='text' value={userInput} onChange={ function (e) {
          setUserInput(e.target.value)
        }}></textarea>
        <button onClick={function () {
          setUserInput("")
          props.leggTilFunksjon({innhold: userInput, navn:"Georg"})
        }}>Send</button>
      </div>
    )
  };