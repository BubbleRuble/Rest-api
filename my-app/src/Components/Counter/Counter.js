import styles from './Counter.module.css';
import { useState, useEffect } from 'react';


export default function Counter() {
  const  [counterA, setCounterA] = useState(0);
  const  [counterB, setCounterB]  = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA(state => state +1)
  };

  const handleCounterBIncrement = () => {
    setCounterB(state => state +1)
  };

  useEffect(() => {
    const totalClicks = counterA + counterB;
    document.title = `Всього клікнули ${totalClicks} разів`
  }, [counterA, counterB]);

  return (
    <>
      <button
        className={styles.button}
        type="button"
        onClick={handleCounterAIncrement}
      >
        Клікнули кнопку {counterA} A
      </button>

      <button
        className={styles.button}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Клікнули кнопку {counterB} B
      </button>
    </>
  );
}
