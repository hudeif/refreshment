import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    if (this.props.counters.length === 0) return null;
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map((m) => {
          return (
            <Counter
              key={m.id}
              counters={m}
              onIncrement={this.props.onIncrement}
              onDelete={this.props.onDelete}
              onDecrement={this.props.onDecrement}
            />
          );
        })}
      </div>
    );
  }
}

export default Counters;
