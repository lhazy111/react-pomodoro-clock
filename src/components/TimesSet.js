import React from 'react'
import { Col, Row, Button } from 'react-bootstrap';
import '../index.css';



function TimesSet({ setBreakLength, breakLength, setSessionLength, sessionLength }) {


    const handleBreakIncrement = () => {
        if (breakLength >= 60) {
            return null
        } else {
            setBreakLength(breakLength + 1)
        }
    }

    const handleBreakDecrement = () => {
        if (breakLength === 1) {
            return null
        } else {
            setBreakLength(breakLength - 1)
        }
    }
    const handleSessionIncrement = () => {
        if (sessionLength >= 60) {
            return null
        } else {
            setSessionLength(sessionLength + 1)
        }
    }

    const handleSessionDecrement = () => {
        if (sessionLength === 1) {
            return null
        } else {
            setSessionLength(sessionLength - 1)
        }
    }


    return (
        <div>
            <Row className="border rounded m-1 text-light d-flex flex-row align-items-center justify-content-center">
                <Col sm={12} md={12} className="text-center">
                    <span id="session-label">Session Length</span>
                </Col>
                <Col xs={3} className="p-2 text-center">
                    <Button
                        variant="outline-light"
                        className="badge-pill shadow"
                        id="session-decrement"
                        onClick={handleSessionDecrement}
                    >
                        <i className="material-icons align-middle">arrow_back</i>
                    </Button>
                </Col>
                <Col xs={4} className="p-2 text-center">
                    <div id="session-length" className='h4 m-0'>{sessionLength}</div>
                </Col>
                <Col xs={3} className="p-2 text-center">
                    <Button
                        variant="outline-light"
                        id="session-increment"
                        className='badge-pill shadow'
                        onClick={handleSessionIncrement}
                    >
                        <i class="material-icons align-middle">arrow_forward</i>
                    </Button>
                </Col>
            </Row>

            <Row className="border rounded m-1 text-light d-flex flex-row align-items-center justify-content-center">
                <Col sm={12} md={12} className="text-center">
                    <span id="break-label">Break Length</span>
                </Col>
                <Col xs={3} className="p-2 text-center">
                    <Button
                        variant="outline-light"
                        className="badge-pill shadow"
                        id="break-decrement"
                        onClick={handleBreakDecrement}
                    >
                        <i className="material-icons align-middle">arrow_back</i>
                    </Button>
                </Col>
                <Col xs={4} className="p-2 text-center">
                    <div id="break-length" className='h4 m-0'>{breakLength}</div>
                </Col>
                <Col xs={3} className="p-2 text-center">
                    <Button
                        variant="outline-light"
                        id="break-increment"
                        className='badge-pill shadow'
                        onClick={handleBreakIncrement}
                    >
                        <i class="material-icons align-middle">arrow_forward</i>
                    </Button>
                </Col>
            </Row>

        </div>
    )
}

export default TimesSet
