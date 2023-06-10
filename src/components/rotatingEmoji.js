import React, { Component } from 'react';
import './rotatingEmoji.css'; // Create this CSS file

class RotatingEmoji extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: 0
    };
  }

  componentDidMount() {
    this.startRotation();
  }

  componentWillUnmount() {
    this.stopRotation();
  }

  startRotation() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        rotation: prevState.rotation + 1
      }));
    }, 10);
  }

  stopRotation() {
    clearInterval(this.interval);
  }

  render() {
    const { rotation } = this.state;

    return (
      <div className="rotating-emoji" style={{ transform: `rotate(${rotation}deg)` }}>
        {this.props.emoji}
      </div>
    );
  }
}

export default RotatingEmoji;

