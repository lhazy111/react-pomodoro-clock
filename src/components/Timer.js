import React from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

import '../index.css';



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
        <Container>
            <Row>
                <Col>
                    <h2 id="timer-label" className="text-center text-light">{mode[cycle]}</h2>
                </Col>
            </Row>
            <Row>

                <h1 id="time-left" className=" display-2 text-light mx-auto">{formattedTime(timeLeft)}</h1>

            </Row>
        </Container>
    )
}

export default Timer
