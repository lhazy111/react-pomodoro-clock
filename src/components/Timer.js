import React from 'react'
import moment from 'moment'


function Timer({ timeLeft, mode, cycle }) {
    const formattedTime = num => {
        num = num / 1000
        console.log('numer', num)
        let minutes = Math.floor(num / 60)
        console.log('minutes:', minutes)
        minutes = minutes < 10 ? `0${minutes}` : minutes
        let seconds = num - minutes * 60
        console.log('seconds:', seconds)
        seconds = seconds < 10 ? `0${seconds}` : seconds
        return `${minutes}:${seconds}`
    }

    return (
        <div>
            <h4 id="timer-label" className="text-center">{mode[cycle]}</h4>
            <h2 id="time-left">{formattedTime(timeLeft)}</h2>
        </div>
    )
}

export default Timer
