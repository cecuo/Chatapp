import { Html } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import { handleClientScriptLoad } from 'next/script'
import styles from '../styles/Home.module.css'
import React, { useEffect, useRef, useState } from 'react'
import { PHASE_DEVELOPMENT_SERVER } from 'next/dist/shared/lib/constants'

function Meldinger(props) {
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(() => {
    scrollToBottom()
  }, [props.meldinger]);


  return (
    <div id={styles.meldinger} key={props.meldinger}>
      {props.meldinger}
      <div ref={messagesEndRef} />

    </div>
    
  )
}

function Melding(props) {
  console.log(props)
  return (
    <div className={styles.melding}>
      <p className={styles.innhold}>{props.innhold}</p>
      <h3 className={styles.navn}>{props.navn}</h3>
    </div>
  )
};

function Input(props) {
  return(
    <div id={styles.input}>
      <textarea type='text'></textarea>
      <button onClick={function (){
        props.leggTilFunksjon(<Melding navn="Cecilie" innhold="hallo"></Melding>)
      }}>Send</button>
    </div>
  )
};

export default function Home() {
  function leggTilMelding(melding) {
    const nyMyMessages = myMessages 
    nyMyMessages.push(melding)
    console.log(nyMyMessages)
    setMyMessages(nyMyMessages)
  }
  const [myMessages, setMyMessages] = useState([
    <Melding navn="Cecilie" innhold="hallo"></Melding>,
    <Melding navn="Mikkel" innhold="hei"></Melding>,
    <Melding navn="Siri" innhold="bonjour"></Melding>,
    <Melding navn="Ariel" innhold="Hei sann"></Melding>,
    <Melding navn="Jonathan" innhold="halla"></Melding>,
    <Melding navn="Jonathan" innhold="halla"></Melding>,
    <Melding navn="Jonathan" innhold="halla"></Melding>
  ])
  return (
    <div>
     <Meldinger meldinger={myMessages}></Meldinger>
     <Input leggTilFunksjon={leggTilMelding}></Input>
    </div>
  )
};

