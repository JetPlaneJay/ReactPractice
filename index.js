import React from "react"
import ReactDOM from "react-dom"

// function App() {
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay
    
//     if (hours < 12) {
//         timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//     } else {
//         timeOfDay = "night"
//     }
    
//     return (
//         <h1>Good {timeOfDay}!</h1>

function App() {
    
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 13) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
//     // }
//         if (hours < 12) {
//         timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//     } else {
//         timeOfDay = "night"
//     }
//     // const firstName = "Jay"
//     // const lastName = "Morrell"
    return (
//         // <h1>Hello {firstName} {lastName}!</h1><br>
//         // <h2>It is currently about {hours} o'clock</h2>
      <h1>Good {timeOfDay}</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
