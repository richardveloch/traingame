import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Car from "./Car"
import TrainData from "./TrainData"

function App() {
    const trainScreen = TrainData.map(car => {
        return <Car 
            name={car.name}
            background={car.background} />
    })
    return (
        <div>
            {trainScreen}
        </div>
    ) 
}

export default App
