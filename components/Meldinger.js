import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Meldinger.module.css'

export function Meldinger(props) {
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(() => {
        scrollToBottom()
    }, [props.meldinger]);



    return (
        <div id={styles.meldinger} key={props.meldinger}>
            {props.meldinger.map(
                function (melding, index) {
                    console.log(melding.innhold)
                    console.log(melding.navn)
                    console.log(index)
                    return (
                        <Melding key={index} innhold={melding.innhold} navn={melding.navn}></Melding>
                    )
                }
            )}
            <div ref={messagesEndRef} />

        </div>
    )
}


export function Melding(props) {
    return (
        <div className={styles.melding}>
            <p className={styles.innhold}>{props.innhold}</p>
            <h3 className={styles.navn}>{props.navn}</h3>
        </div>
    )
};