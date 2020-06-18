import React, { Component } from 'react';

export default class Counter extends Component {
  // We can decide whether we should make an ajax call based on the changes
  // in props and state objects
  componentDidUpdate(previousProps, previousState) {
    console.log("previous props ", previousProps);
    // console.log("previous state ", previousState);
    // if (previousProps.counter.value !== this.props.counter.value) {
    //   // Ajax call to get new data from the server
    // }
  }

  // a cleanup function that can prevent memory leaks...
  componentWillUnmount() {
    console.log("Counter - Unmounted")
  }

  render() {
    return (<div>
      {this.props.children}
      <span style={{ fontSize: 30 }} className={this.badgeTags()}>{this.formatCount()}</span>
      <button 
      onClick={() => this.props.onIncrement(this.props.counter) } 
      className="btn btn-secondary btn-sm">
        Increment
      </button>
      <button 
      onClick={() => this.props.onDelete(this.props.counter.id)} 
      className="btn btn-danger btn-sm m-2">Delete
      </button>
    </div>
  );
  }

  formatCount() {
    const { value } = this.props.counter
    return value === 0 ? "Zero" : value;
  }

  badgeTags() {
    let className = "badge m-2 badge-";
    className += (this.props.counter.value === 0) ? "warning" : "primary";
    return className;
  };

}
