import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  /*
  
  constructor() {
    super();
    console.log("App constructor");
  }
  
  componentDidMount(){
    console.log("App Mounted");
  }
  */
  state = {
    counters: [
      { id: 1, value: 4 ,liked:true},
      { id: 2, value: 0 ,liked:false},
      { id: 3, value: 0 ,liked:false},
      { id: 4, value: 0 ,liked:false},
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };
  handleDecrement = (counter) =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({ counters });

  }
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);

  
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState(counters);
  };
  handleLike = (counter) => {
    
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].liked = !counters[index].liked;
    this.setState({ counters });
  }
  render() {
    
    return (
      <React.Fragment>

        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        ></NavBar>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onLike={this.handleLike}
            onReset={this.handleReset}
          ></Counters>
          
        </main>
      </React.Fragment>
    );
  }
}

export default App;
