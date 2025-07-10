import styles from './ColorPicker.module.css';
import { useState } from 'react';

export default function ColorPicker ({options}) {
  const [activeOptionIdx, setActiveOptionIdx ] = useState(0);

  const makeOptionClassName = index => {
    return index === activeOptionIdx
    ? styles.activeOptionIdx
    : styles.option
    };

    const { label } = options[activeOptionIdx]

  return (
      <div className={styles.ColorPicker}>
        <h2 className={styles.ColorPicker__title}>ColorPicker</h2>
        <p>Обраний колір: {options[activeOptionIdx].label}  </p>
        <div>
          {options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className={makeOptionClassName(index)}
                style={{ backgroundColor: color }}
                onClick={() => setActiveOptionIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>   
  )
}