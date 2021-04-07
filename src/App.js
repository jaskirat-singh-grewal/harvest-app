import logo from './logo.svg';
import './App.css';
import FieldForm from "./components/FieldForm.jsx";
import TractorForm from "./components/TractorForm.jsx"
import React, { Component } from 'react';
class App extends Component {
  state = {
    field: {
      length: 0,
      width: 0,
    },
    numberOfTractors: 1,
    tractors: [],
    resultTime: 0,
  }
  timeTractor = (t) => {
    var s = this.state
    var speed = t.speed / 3.6
    if (s.field.width <= t.width) {
      return s.field.length / speed;
    }
    var trips = Math.ceil(s.field.width / t.width);
    var time = t.uTurnTime * (trips - 1);
    time += ((s.field.length - 2 * t.width) * trips) / speed;
    return time;
  }
  calResult = () => {
    var totalSpeed = 0
    this.state.tractors.forEach((t) => {
      totalSpeed += 1 / this.timeTractor(t)
    });
    var totalSeconds = 1 / totalSpeed;
    totalSeconds = parseInt(totalSeconds);
    if (Number.isNaN(totalSeconds)) {
      return "infinite hours"
    }
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;
    var resultStr = "" + (hours === 0 ? "" : (hours === 1 ? hours + " hour " : hours + " hours "))
      + (minutes === 0 ? "" : (minutes === 1 ? minutes + " minute " : minutes + " minutes "))
      + (seconds === 0 ? "" : (seconds === 1 ? seconds + " second " : seconds + " seconds"));
    return resultStr;
  }



  countChange = () => {
    var tractors = this.state.tractors;
    var numOfNew = this.state.numberOfTractors - this.state.tractors.length;
    var arrLength = this.state.tractors.length;
    if (numOfNew > 0) {
      for (var i = 0; i < numOfNew; i++) {
        var newTractor = {}
        newTractor.speed = 0;
        newTractor.uTurnTime = 0;
        newTractor.width = 0;
        newTractor.num = i + arrLength;
        tractors.push(newTractor);
      }
    } else if (numOfNew < 0) {
      for (i = 0; i > numOfNew; i--) {
        tractors.pop();
      }
    }
    this.setStateSync({ tractors: tractors });
  }
  change = e => {
    var value = ""
    if (e.target.value === "") {
      value = "0"
    } else {
      value = e.target.value;
    }
    if (e.target.name === "numberOfTractors") {
      if (e.target.value === "") {
        this.setState({ numberOfTractors: 1 }, () => { this.countChange() })
      } else {
        this.setState({ numberOfTractors: parseFloat(e.target.value) }, () => { this.countChange() });
      }
    } else if (e.target.name === "speed" || e.target.name === "tractorWidth" || e.target.name === "uTurnTime") {
      var tractors = this.state.tractors;
      if (e.target.name === 'tractorWidth') {
        tractors[e.num].width = parseFloat(value);
      } else if (e.target.name === 'speed') {
        tractors[e.num].speed = parseFloat(value);
      } else {
        tractors[e.num].uTurnTime = parseFloat(value);
      }
      this.setStateSync({ tractors: tractors });
    } else {
      this.setStateSync({
        field: {
          ...this.state.field,
          [e.target.name]: parseFloat(value)
        }
      });
    }
  }
  renderTractors = () => {
    var length = this.state.numberOfTractors;
    for (var i = 0; i < length; i++) {

    }
  }
  setStateSync = (e) => {
    return new Promise(resolve => {
      this.setState(e, () => resolve());
    });
  }
  render() {
    this.calResult();
    return (
      <div className="App" >
        <header className="App-header">
          Calculate the Time Required to Harvest a Field of Crop!
      </header>
        <br /><br />
        <h2>Field Parameters</h2>
        <FieldForm change={e => this.change(e)} />
        {
          this.state.tractors.map((e) => { return (<TractorForm change={e => this.change(e)} num={e.num} key={e.num} />) })
        }
        <div className="jumbotron">
          <h3>All combines will take {this.calResult()} to havest the crop.</h3>
        </div>
      </div>
    );
  }
}

export default App;
