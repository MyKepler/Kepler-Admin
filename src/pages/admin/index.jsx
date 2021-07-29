import { DatePicker } from "antd";
import React from "react";

class App extends React.Component {
  componentDidMount(props) {
    //console.log(this.props.match.params);
    console.log(this.props.history.location);
  }
  state = {
    a: 111,
  };
  click = () => {
    console.log(this);
    this.setState({
      a: 222,
    });
  };
  render() {
    return (
      <div>
        {this.state.a}
        <p onClick={this.click}>admin页面</p>
        <DatePicker />
      </div>
    );
  }
}

export default App;
