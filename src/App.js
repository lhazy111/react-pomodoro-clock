import React from 'react';
import { useState, useEffect } from 'react'
import { Container, Row, Col, Jumbotron, Button, } from 'react-bootstrap';
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ClearRounded } from '@material-ui/icons';
import './App.css';

function App() {
  const [breakLength, setBreakLength] = useState(2)
  const [sessionLength, setSessionLength] = useState(1)
  const [cycle, setCycle] = useState(0)
  const [timeLeft, setTimeLeft] = useState(1 * 60)
  const [playOn, setPlayOn] = useState(false)
  const [intervalId, setIntervalId] = useState(null)
  const mode = ['Session', 'Break']
  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()
  const minutes = num => {
    let minutes = Math.floor(num / 60)
    return minutes < 10 ? `0${minutes}` : minutes
  }
  const seconds = num => {
    let seconds = num - Math.floor(num / 60) * 60
    return seconds < 10 ? `0${seconds}` : seconds
  }


  //-----------------------------------------------------------------------------
  //----------------------------------------------------------------------------
  useEffect(() => {
    startStop()
  }, [timeLeft, playOn])

  //-----------------------------------------------------------------------------

  const handleClickForBreak = (op) => {
    if (op === '+') {
      setBreakLength(prevState => prevState + 1)
    } else {
      setBreakLength(prevState => prevState > 0 ? prevState - 1 : prevState)
    }
  }

  const handleClickForSession = (op) => {
    if (op === '+') {
      setSessionLength(prevState => prevState + 1)
    } else {
      setSessionLength(prevState => prevState > 0 ? prevState - 1 : prevState)
    }
  }

  const reset = () => {
    console.log('reset func triggered')
    setCycle(0)
    setTimeLeft(1500)
    setBreakLength(5)
    setSessionLength(25)
  }


  const startStop = () => {
    console.log(`start/stop triggered, PLAYON ${playOn}, CYCLE: ${cycle}`)
    let tick = null
    if (playOn) {
      if (timeLeft > 0) {
        tick = setTimeout(() => {
          //console.log('tick id', tick)
          setTimeLeft(prevState => prevState - 1)
        }, 100);
      } else {
        if (cycle === 0) {
          setCycle(1)
          setTimeLeft(breakLength * 60)
        } else if (cycle === 1) {
          setCycle(0)
          setTimeLeft(sessionLength * 60)
        }
      }
    }

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
              <p>
                {day}.{month}.{year}
              </p>
              <Row>
                <Col className="m-2">
                  <Row className="bg-secondary rounded d-flex align-items-center justify-content-around my-1 p-3">
                    <span id="break-label">Breake length:</span>
                    <ArrowUpwardOutlined
                      id="break-increment"
                      className='h4'
                      onClick={() => {
                        handleClickForBreak('+')
                      }}
                    />
                    <span id="break-length" className='h4'>{breakLength}</span>
                    <ArrowDownwardOutlined
                      id="break-decrement"
                      onClick={() => {
                        handleClickForBreak('-')
                      }}
                    />
                  </Row>
                  <Row className="bg-secondary rounded d-flex align-items-center justify-content-around my-1 p-3">
                    <span id="session-label">Session length:</span>
                    <ArrowUpwardOutlined
                      id="session-increment"
                      onClick={() => {
                        handleClickForSession('+')
                      }} />
                    <span id="session-length">{sessionLength}</span>
                    <ArrowDownwardOutlined
                      id="session-decrement"
                      onClick={() => {
                        handleClickForSession('-')
                      }} />
                  </Row>
                </Col>
                <Col className="border border-secondary">
                  <h4 id="timer-label" className="text-center">{playOn ? mode[cycle] : 'PAUSED'}</h4>
                  <h2 id="time-left" className="text-center">{`${minutes(timeLeft)} : ${seconds(timeLeft)}`}</h2>
                </Col>
              </Row>
              <p>
                <Button
                  id="start_stop"
                  variant="primary"
                  onClick={() => {
                    setPlayOn(prevState => !prevState)
                    //startStop()
                  }}>{playOn ? "Stop" : "Start"}</Button>
                <Button
                  id="reset"
                  variant="primary"
                  onClick={() => reset()}>
                  RESET
                  </Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
