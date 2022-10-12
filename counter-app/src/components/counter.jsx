import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

const emptyHeart = <FontAwesomeIcon icon={farHeart} />
const fullHeart = <FontAwesomeIcon icon={faHeart} />

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

      
        <div className="row ">
          <div className="col col-2">
           
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>

          <div className="col ">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm "
            >
              +
            </button>
          </div>

          <div className="col">
          <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary btn-sm "
              disabled={this.props.counter.value === 0? "disabled":""}
            >
              -
            </button>
         
          </div>
          <div className="col ">
            
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm  "
            >
              Delete
            </button>
          </div>
          <div className="col col-4">
            <div  onClick={() => this.props.onLike(this.props.counter)}  >
              {this.formateHeart()}
            </div>
            
            
          </div>
        </div>
      
    );
  }
  formateHeart() {
    if(this.props.counter.liked){
      return fullHeart;

    }else {
      return emptyHeart;
    }
  }
  getBadgeClasses() {
    let classes = "badge m-2  badge-";
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
          className="btn btn-secondary btn-sm m-1 "
        >
          -
        </button>
      );
    } else {
      return (
        <button className="btn btn-secondary btn-sm m-2  disabled">-</button>
      );
    }
  }
}

export default Counter;
