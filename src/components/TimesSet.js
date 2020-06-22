import React from 'react'
import { Row, Button, Badge } from 'react-bootstrap';
import '../App.css';



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
            <Row className="bg-secondary rounded d-flex align-items-center justify-content-around my-1 p-3">
                <span id="break-label">Break Length</span>
                <Button
                    variant="secondary"
                    id="break-decrement"
                    className='d-flex align-items-center badge-pill shadow '
                    onClick={handleBreakDecrement}
                >
                    <i class="material-icons">arrow_back</i>
                </Button>
                <span id="break-length" className='h3'>{breakLength}</span>
                <Button
                    variant="secondary"
                    id="break-increment"
                    className='d-flex align-items-center badge-pill shadow '
                    onClick={handleBreakIncrement}
                >
                    <i class="material-icons">arrow_forward</i>
                </Button>
            </Row>
            <Row className="bg-secondary rounded d-flex align-items-center justify-content-around my-1 p-3">
                <span id="session-label">Session Length</span><Button
                    className="badge-pill badge-sm"
                    id="session-decrement"
                    onClick={handleSessionDecrement}
                >
                    <span class="material-icons">arrow_forward</span>
                </Button>
                <div id="session-length" className='h4'>{sessionLength}</div>
                <Button
                    id="session-increment"
                    className='h4'
                    onClick={handleSessionIncrement}
                >+
                </Button>
            </Row>

        </div>
    )
}

export default TimesSet
