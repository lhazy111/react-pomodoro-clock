import React from 'react';
import { useState, useEffect } from 'react'
import { Container, Row, Col, Jumbotron, Button, } from 'react-bootstrap';
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@material-ui/icons';
import './App.css';

function App() {
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [isSession, setIsSession] = useState(true)
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60)
  const [playOn, setPlayOn] = useState(false)
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
  useEffect(() => {
    console.log('Time left changed');
  }, [timeLeft]);

  // useEffect(() => {
  //   let interval = null;
  //   if (playOn) {
  //     interval = setInterval(() => {
  //       setTimeLeft(prevState => prevState - 1);
  //     }, 1000);
  //     if (timeLeft < 0 && isSession) {
  //       setTimeLeft(breakLength * 60)
  //       setIsSession(false)
  //     } else if (timeLeft < 0 && !isSession) {
  //       setTimeLeft(sessionLength * 60)
  //       setIsSession(true)
  //     }
  //   } else {
  //     clearInterval(interval)
  //   }
  //   return () => clearInterval(interval);
  // }, [playOn, timeLeft, breakLength, isSession, sessionLength]);

  const handleBreakClick = (op) => {
    if (op === '+') {
      setBreakLength(prevState => prevState + 1)
    } else {
      setBreakLength(prevState => prevState > 0 ? prevState - 1 : prevState)
    }
  }

  const handleSessionClick = (op) => {
    if (op === '+') {
      setSessionLength(prevState => prevState + 1)
      setTimeLeft(prevState => prevState + 60)
    } else {
      setSessionLength(prevState => prevState > 0 ? prevState - 1 : prevState)
      setTimeLeft(prevState => prevState > 0 ? prevState - 60 : prevState)
    }
  }



  const startStop = () => {
    console.log('startstop triggered')
    // const countdown = () => {
    //   if (playOn) {
    //     setTimeLeft(prevState => {
    //       return prevState >= 1 ? prevState - 1 : prevState
    //     })
    //   } else {
    //     //clearInterval(intervalId)
    //   }
    // }
    //let intervalId = setInterval(countdown, 1000)

  }

  const reset = () => {
    console.log('reset func triggered')
    setIsSession(true)
    setTimeLeft(1500)
    setBreakLength(5)
    setSessionLength(25)
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
                        handleBreakClick('+')
                      }}
                    />
                    <span id="break-length" className='h4'>{breakLength}</span>
                    <ArrowDownwardOutlined
                      id="break-decrement"
                      onClick={() => {
                        handleBreakClick('-')
                      }}
                    />
                  </Row>
                  <Row className="bg-secondary rounded d-flex align-items-center justify-content-around my-1 p-3">
                    <span id="session-label">Session length:</span>
                    <ArrowUpwardOutlined
                      id="session-increment"
                      onClick={() => {
                        handleSessionClick('+')
                      }} />
                    <span id="session-length">{sessionLength}</span>
                    <ArrowDownwardOutlined
                      id="session-decrement"
                      onClick={() => {
                        handleSessionClick('-')
                      }} />
                  </Row>
                </Col>
                <Col className="border border-secondary">
                  <h4 id="timer-label" className="text-center">{playOn ? isSession ? mode[0] : mode[1] : 'STAND BY'}</h4>
                  <h2 id="time-left" className="text-center">{`${minutes(timeLeft)} : ${seconds(timeLeft)}`}</h2>
                </Col>
              </Row>
              <p>
                <Button
                  id="start_stop"
                  variant="primary"
                  onClick={() => {
                    setPlayOn(!playOn)
                    startStop()
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
