import React, { Component } from "react";

class Counter extends Component {
  /*
  
  constructor() {
    super();
    console.log("Counter constructor");
  }

  componentDidMount() {
    console.log("counter Mounted");
  }
  */

  render() {
    //console.log("Counter REndered");
    return (
      /*
      
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col-sm-4">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
            >
              +
            </button>
            
          </div>
          <div className="col-sm-4">
            {this.formatDecrementButton()
            }

          </div>
          <div className="col-sm-4">

            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      */
      <div className="container">
        <div className="row ">
          <div className="col col-2">
            {" "}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>

          <div className="col">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
            >
              +
            </button>
          </div>

          <div className="col">
            
          {this.formatDecrementButton()
            }
          </div>
          <div className="col ">
            {" "}
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  formatDecrementButton() {
    const { value } = this.props.counter;
    if (value > 0) {
      return (
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
      );
    } else {
      return (
        <button className="btn btn-secondary btn-sm m-2 disabled">-</button>
      );
    }
  }
}

export default Counter;
