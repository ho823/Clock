import React from 'react';
import styles from './Clock.module.css';
import flowers from './img/flowers.png';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date().toLocaleTimeString('fr-FR')};
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillMount() {
    clearInterval(this.intervalID)
  }

  tick() {
    this.setState({
      date: new Date().toLocaleTimeString('fr-FR')
    });
  }

  render(){
    return(
      <div className={styles.container}>
      <div className={styles.containerClock}>
        {this.state.date}
      </div>
      <div>
        <img className={styles.image} src={flowers} alt='Flowers in desk' />
      </div>
      </div>
    );
  }
};

