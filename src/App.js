import React from 'react';
import Clock from './Clock';
import styles from './App.module.css';


function App() {
  return (
    <div className={styles.containerApp}>
      <Clock />
    </div>
  );
}

export default App;
