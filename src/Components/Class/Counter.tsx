import { Component } from "react";

type messageProps = {
  message: string;
};

type CounterState = {
  count: number;
};
class Counter extends Component<messageProps, CounterState> {
  state = {
    count: 0,
  };

  incrementHandler = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementHandler}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

export default Counter;
