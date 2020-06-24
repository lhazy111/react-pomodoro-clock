import React from 'react'
import { useState } from 'react'
import { Button, Row, Col } from 'react-bootstrap';
import '../index.css';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';



function TimerControls({ playOn, setPlayOn, reset, handleSwitchChange, setVolumeLevel }) {
    const [value, setValue] = useState(30)

    const handleSlideChange = (event, newValue) => {
        setValue(newValue)
        setVolumeLevel(newValue / 100);
    };




    return (
        <div>
            <Row className="d-flex justify-content-center align-items-center pt-2 border rounded">
                <Col xs={12} md={5}
                    className="d-flex justify-content-around">
                    <Button
                        variant="outline-light"
                        className="badge-pill shadow m-1"
                        id="start_stop"
                        onClick={() => {
                            setPlayOn(prevState => !prevState)
                        }}>{playOn ?
                            <i class="material-icons align-middle">pause_circle_outline</i>
                            : <i class="material-icons align-middle">play_circle_outline</i>}
                    </Button>
                    <Button
                        variant="outline-light"
                        className="badge-pill shadow m-1"
                        id="reset"
                        onClick={reset}>
                        <i class="material-icons align-middle">restore</i>
                    </Button>
                </Col>
                <Col xs={12} md={6}
                    className="">
                    <Row id="volSlider">
                        <Col xs={12}
                            className="text-light  text-center">
                            <span>Sound</span>
                        </Col>
                        <Col sm={5} xs={12}
                            className=" text-center text-light">
                            <span>1</span>
                            <Switch
                                color="primary"
                                onChange={handleSwitchChange} />
                            <span>2</span>
                        </Col>
                        <Col sm={7} xs={12}
                            className="d-flex align-items-center text-light ">
                            <VolumeDown />
                            <Slider
                                className="slider"
                                color="secondary"
                                value={value}
                                onChange={handleSlideChange}
                                aria-labelledby="continuous-slider" />
                            <VolumeUp />
                        </Col>
                    </Row>
                </Col>

            </Row>





        </div>
    )
}

export default TimerControls