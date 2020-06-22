import React from 'react'
import { Button, Badge } from 'react-bootstrap';


function TimerControls({ playOn, setPlayOn, reset }) {


    return (
        <div>
            <Badge
                className='m-2 shadow'
                id="start_stop"
                onClick={() => {
                    setPlayOn(prevState => !prevState)
                    //startStop()
                }}>{playOn ?
                    <i class="material-icons md-48">pause_circle_outline</i>
                    : <i class="material-icons md-48">play_circle_outline</i>}
            </Badge>
            <Badge pill
                className='m-2 shadow-sm'
                id="reset"
                onClick={reset}>
                <span class="material-icons">restore</span>
            </Badge>
        </div>
    )
}

export default TimerControls