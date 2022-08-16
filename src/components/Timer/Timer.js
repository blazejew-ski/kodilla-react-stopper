import styles from './Timer.module.scss'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Timer = () => {
  const [time, setTimer] = useState(0);
  const [interval, setIntervals] = useState(0);

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimer(time => time + 1);
    }, 1);
    setIntervals(interval);
  }

  const stopTimer = () => {
    clearInterval(interval);
  };

  const resetTimer = () => {
    clearInterval(interval);
    setIntervals(0);
    setTimer(0);
  };

  const msToTime = (duration) => {
    let milliseconds = parseInt((duration % 100)),
    seconds = Math.floor((duration / 100) % 60),
    minutes = Math.floor((duration / (100 * 60)) % 60),
    hours = Math.floor((duration / (100 * 60 * 60)) % 24);

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

  const nowTimer = msToTime(time);

  return (
    <div>
      <header className={styles.header}>
          <h2 className={styles.title}>Timer</h2>
      </header>
      <section className={styles.timer}>
        <p className={styles.timerCounter}>{nowTimer}</p>
      </section>
      <section className={styles.buttons}>
        <button className={styles.button} onClick={startTimer}>Start</button>
        <button className={styles.button} onClick={stopTimer}>Stop</button>
        <button className={styles.button} onClick={resetTimer}>Reset</button>
      </section>
    </div>
  );

}

export default Timer;