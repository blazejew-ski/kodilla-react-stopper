import styles from './Timer.module.scss'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [interval, setIntervals] = useState(0);

  const startTimer = () => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1);
    setIntervals(interval);
  }

  const stopTimer = () => {
    clearInterval(interval);
  };

  const resetTimer = () => {
    clearInterval(interval);
    setIntervals(0);
    setSeconds(0);
  };

  const nowTimer = seconds;

  return (
    <div>
      <header className={styles.header}>
          <h2 className={styles.title}>Timer</h2>
      </header>
      <section className={styles.timer}>
        <p className={styles.timerCounter}>{seconds}</p>
      </section>
      <section className={styles.buttons}>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </section>
    </div>
  );

}

export default Timer;