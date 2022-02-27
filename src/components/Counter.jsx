import React, { Component, Fragment } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row align-items-center">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            className="btn btn-success"
            onClick={() => this.props.onIncrement(this.props.counters)}
          >
            +
          </button>
          <button
            className="btn btn-secondary m-2"
            disabled={this.props.counters.value === 0 ? true : false}
            onClick={() => this.props.onDecrement(this.props.counters)}
          >
            -
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.props.onDelete(this.props.counters.id)}
          >
            x
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "m-2 badge bg-";
    this.props.counters.value == 0
      ? (classes += "warning")
      : (classes += "primary");
    return classes;
  }

  formatCount() {
    let { value } = this.props.counters;
    return value == 0 ? "Zero" : value;
  }
}

export default Counter;
