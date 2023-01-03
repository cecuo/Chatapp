import { Html } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import { handleClientScriptLoad } from 'next/script'
import styles from '../styles/Home.module.css'
import React, { use, useEffect, useRef, useState } from 'react'
import { PHASE_DEVELOPMENT_SERVER } from 'next/dist/shared/lib/constants'
import { Meldinger, Melding } from "../components/Meldinger"
import Input from "../components/Input"
import io from 'socket.io-client';

const socket = io("localhost:4000");

export default function Home() {

  function leggTilMelding(melding) {
    socket.emit("message", melding)
    setMyMessages(
      function (oldMessages) {
        return [...oldMessages, melding]
        
      }
    )
  }
  const [myMessages, setMyMessages] = useState([
    {innhold: "Hei der", navn: "Cecilie"}, 
    {innhold: "Hallo", navn: "Mikkel"}
  ])


  useEffect(function (){
    socket.on("reciveMessage", function (data){
      setMyMessages(
        function (oldMessages) {
          return [...oldMessages, data]
          
        }
      )
    })
    function ferdig(){
      socket.off("reciveMessage")
    }
    return ferdig
  })
  return (
    <div>
      <Meldinger meldinger={myMessages}></Meldinger>
      <Input leggTilFunksjon={leggTilMelding}></Input>
    </div>
  )
};

