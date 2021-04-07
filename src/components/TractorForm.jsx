
import React, { Component } from 'react';
import '../App.css';

class FieldForm extends Component {
    state = {
        speed: 0,
        uTurnTime: 0,
        tractorWidth: 0,
        num: this.props.num,
    }
    change = e => {
        e.num = this.state.num;
        this.setState({ [e.target.name]: e.target.value });
        this.props.change(e);
    }
    render() {
        return (<div>
            <br></br>
            <form>
                <h2> Combine number: {this.props.num + 1}</h2>
                <div className="form-group">
                    <label >Average Combine's Speed (km/h): </label>
                    <input value={this.state.speed !== 0 ? this.state.speed : ""} onChange={e => this.change(e)} type="number" className="form-control" id="speed" name="speed" num={this.props.num} placeholder="Km/h" />
                </div>
                <div className="form-group">
                    <label >Combine's header Width (meters): </label>
                    <input value={this.state.width !== 0 ? this.state.width : ""} onChange={e => this.change(e)} type="number" className="form-control" id="tractorWidth" name="tractorWidth" num={this.props.num} placeholder="meters" />
                </div>
                <div className="form-group">
                    <label >Time required to make a U-Turn (seconds): </label>
                    <input value={this.state.uTurnTime !== 0 ? this.state.uTurnTime : ""} onChange={e => this.change(e)} type="number" className="form-control" id="uturnTime" name="uTurnTime" num={this.props.num} placeholder="seconds" />
                </div>
            </form>
        </div>


        );
    }
}

export default FieldForm;