
// 类组件
import React from "react";
import { Alert } from "antd";
// import "./index.less";
// import axios from "axios";
import { getInfo } from "../../../service/modules/home";

class App extends React.Component {
  componentDidMount(props) {
    //console.log(this.props.match.params);
    this.handelAlert();
  }
  // axios 例子
  handelAlert = () => {
    getInfo({ name: "xuxy" }).then((res) => {
      console.log(111, res);
    });
    // axios
    //   .get("https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists")
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
  render() {
    return (
      <div>
        <Alert
          message="Kepler学习系统"
          type="success"
          onClick={this.handelAlert}
        />
      </div>
    );
  }
}

export default App;
