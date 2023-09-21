import { useState } from 'react'

export default function Car(props) {
    return (
        <div className="train--car">
            <img src={`/${props.background}`} className="car--background" />
            <h3>${props.name}</h3>
        </div>
    )
}