
import React, { Component } from 'react';
import '../App.css';

class FieldForm extends Component {
  state = {
    length: 0,
    width: 0,
    numberOfTractors: 1
  }

  change = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.change(e);
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label >Field Length (meters): </label>
            <input value={this.state.length !== 0 ? this.state.length : ""} onChange={e => this.change(e)} type="number" name="length" className="form-control" id="fieldLength" placeholder="meters" />
          </div>
          <div className="form-group">
            <label >Field Width (meters): </label>
            <input value={this.state.width !== 0 ? this.state.width : ""} onChange={e => this.change(e)} type="number" name="width" className="form-control" id="fieldWidth" placeholder="meters" />
          </div>
          <div className="form-group">
            <label>Number of combines: </label>
            <input value={this.state.numberOfTractors !== 1 ? this.state.numberOfTractors : ""} onChange={e => this.change(e)} type="number" name="numberOfTractors" className="form-control" id="numberOfTractors" placeholder="count" />
          </div>
        </form>
      </div>

    );
  }
}

export default FieldForm;