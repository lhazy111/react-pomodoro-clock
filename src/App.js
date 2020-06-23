import React from 'react';
import ReactFCCtest from 'react-fcctest'
import { useState } from 'react'
import { useEffect, useRef } from 'react'
import useInterval from 'react-useinterval'
import Timer from './components/Timer'
import TimerControls from './components/TimerControls'
import TimesSet from './components/TimesSet'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import beep1 from './sounds/beep1.mp3'
import beep2 from './sounds/beep2.mp3'
import './App.css';

function App() {
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [cycle, setCycle] = useState(0)
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60 * 1000)
  const [playOn, setPlayOn] = useState(false)
  const mode = ['Session', 'Break']
  const sound1 = useRef()
  const sound2 = useRef()
  const [soundChoice, setSoundChoice] = useState(sound2)
  const [volumeLev, setVolumeLev] = useState(0.5)

  useInterval(() => setTimeLeft(timeLeft - 1000), playOn ? 1000 : undefined);

  useEffect(() => {
    setTimeLeft(sessionLength * 60 * 1000)
    document.getElementById('beep').volume = volumeLev
    document.getElementById('beep1').volume = volumeLev
  }, [sessionLength, volumeLev])

  useEffect(() => {
    if (timeLeft === 0 && cycle === 0) {
      setCycle(1)
      soundChoice.current.play()
      setTimeLeft(breakLength * 60 * 1000)
    } else if (timeLeft === 0 && cycle === 1) {
      setCycle(0)
      soundChoice.current.play()
      setTimeLeft(sessionLength * 60 * 1000)
    }
  }, [timeLeft, breakLength, sessionLength, cycle])


  const reset = () => {
    console.log('reset func triggered')
    setPlayOn(false)
    setCycle(0)
    setTimeLeft(25 * 60 * 1000)
    setBreakLength(5)
    setSessionLength(25)
    soundChoice.current.pause()
    soundChoice.current.currentTime = 0
  }

  const handleSwitchChange = (event, value) => {
    if (soundChoice === sound1) {
      sound2.current.play()
      setSoundChoice(sound2)
    } else {
      sound1.current.play()
      setSoundChoice(sound1)
    }
  }

  const handleSlideChange = (event, newValue) => {
    newValue = newValue / 100
    setVolumeLev(newValue);
  };



  return (
    <div className="App">
      <Container fluid id="wrap">
        <Row>
          <Col>
            <h1>Pomodoro</h1>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center pt-5 mt-5">
          <Col xs={12} md={10} lg={8}>
            <Jumbotron className="p-3 shadow border ">
              <Row>
                <Col>
                  <h1 className="text-center text-light">Pomodoro clock</h1>
                </Col>
              </Row>
              <Row className="justify-content-around">
                <Col sm={12} md={5} className="m-1">
                  <Timer
                    timeLeft={timeLeft}
                    mode={mode}
                    cycle={cycle} />
                </Col>
                <Col sm={12} md={5} className="m-1">
                  <TimesSet
                    setBreakLength={setBreakLength}
                    breakLength={breakLength}
                    setSessionLength={setSessionLength}
                    sessionLength={sessionLength}
                  />
                </Col>

              </Row>
              <Row>
                <Col className="m-1">
                  <TimerControls
                    reset={reset}
                    playOn={playOn}
                    setPlayOn={setPlayOn}
                    handleSwitchChange={handleSwitchChange}
                    setVolumeLevel={setVolumeLev}>
                  </TimerControls>
                </Col>
              </Row>
            </Jumbotron>
          </Col>
        </Row>
      </Container>

      <ReactFCCtest />
      <audio id="beep1" src={beep1} ref={sound1} />
      <audio id="beep" src={beep2} ref={sound2} />
    </div>
  );
}

export default App;
