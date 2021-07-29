import { Form, Input, Button, Checkbox } from "antd";
import React from "react";
import "./index.less";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   console.log("constructor", this.props);
  // }
  onFinish = (values) => {
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  onSubmit = () => {
    // this.props.history.push("/admin");
    this.props.history.push({
      pathname: "/admin",
      state: {
        id: 3,
      },
    });
  };

  onReset = () => {};

  onFill = () => {};

  render() {
    return (
      <div className="login-main">
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
              Submit
            </Button>
            <Button htmlType="button" onClick={this.onReset}>
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={this.onFill}>
              Fill form
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default App;
