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

  useInterval(() => setTimeLeft(timeLeft - 1000), playOn ? 100 : undefined);

  useEffect(() => {
    setTimeLeft(sessionLength * 60 * 1000)

  }, [sessionLength])

  useEffect(() => {
    if (timeLeft === 0 && cycle === 0) {
      setCycle(1)
      sound2.current.play()
      setTimeLeft(breakLength * 60 * 1000)
    } else if (timeLeft === 0 && cycle === 1) {
      setCycle(0)
      sound2.current.play()
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
    sound2.current.pause()
    sound2.current.currentTime = 0
  }

  const playSound = (audioId) => {
    document.getElementById(audioId).play()
  }

  return (
    <div className="App">
      <Container fluid className="h-100" >
        <Row className="bg-secondary">
          <Col>
            <h1>Pomodoro</h1>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center pt-5 mt-5">
          <Col xs={10} md={8}>
            <Jumbotron className="p-3 shadow-lg border border-primary">
              <h1 className="border text-center">Pomodoro clock</h1>
              <Row>
                <Col className="m-2">
                  <TimesSet
                    setBreakLength={setBreakLength}
                    breakLength={breakLength}
                    setSessionLength={setSessionLength}
                    sessionLength={sessionLength}
                  />
                </Col>
                <Col className="border border-secondary">
                  <Timer
                    timeLeft={timeLeft}
                    mode={mode}
                    cycle={cycle} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <TimerControls
                    reset={reset}
                    playOn={playOn}
                    setPlayOn={setPlayOn} >
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
