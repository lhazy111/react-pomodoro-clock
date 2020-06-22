import React from 'react'
import { Button } from 'react-bootstrap';


function TimerControls({ playOn, setPlayOn, reset }) {


    return (
        <div>
            <Button
                className='m-1 small btn-sm shadow-sm'
                id="start_stop"
                variant="primary"
                onClick={() => {
                    setPlayOn(prevState => !prevState)
                    //startStop()
                }}>{playOn ? "Stop" : "Start"}</Button>
            <Button
                className='m-1 btn-sm shadow-sm'
                id="reset"
                variant="primary"
                onClick={reset}>
                RESET
                  </Button>
        </div>
    )
}

export default TimerControls