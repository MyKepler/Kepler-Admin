
// 类组件
import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import "./index.less";

class App extends React.Component {
  // 创建ref
  formRef = React.createRef();

  // 构造器 可不写
  // constructor(props) {
  //   super(props);
  //   console.log("constructor", this.props);
  // }

  onSubmit = () => {
    console.log(this.formRef.current, "this.formRef.current======");
    this.formRef.current
      .validateFields()
      .then((val) => {
        if (val.username === "xuxinyi" && val.password === "123456") {
          this.props.history.push({
            pathname: "/home",
            state: {
              id: 3,
            },
          });
        } else {
          message.error("Account Error");
        }
      })
      .catch((errorInfo) => {
        console.log(errorInfo, "errorInfo=====");
      });
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  onFill = () => {
    this.formRef.current.setFieldsValue({
      username: "xuxinyi",
      password: "123456",
    });
  };

  render() {
    return (
      <div className="login-main">
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          ref={this.formRef}
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
