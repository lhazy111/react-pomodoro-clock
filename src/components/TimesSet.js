import React from 'react'
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@material-ui/icons';
import { Row, Button } from 'react-bootstrap';


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
                    id="break-increment"
                    className='h4'
                    onClick={handleBreakIncrement}
                >+
                    </Button>
                <div id="break-length" className='h4'>{breakLength}</div>
                <Button
                    id="break-decrement"
                    onClick={handleBreakDecrement}
                >-
                </Button>
            </Row>
            <Row className="bg-secondary rounded d-flex align-items-center justify-content-around my-1 p-3">
                <span id="session-label">Session Length</span>
                <Button
                    id="session-increment"
                    className='h4'
                    onClick={handleSessionIncrement}
                >+
                </Button>
                <div id="session-length" className='h4'>{sessionLength}</div>
                <Button
                    id="session-decrement"
                    onClick={handleSessionDecrement}
                >-
                </Button>
            </Row>

        </div>
    )
}

export default TimesSet
