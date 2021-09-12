// 函数组件
import { Form, Input, Button, Checkbox } from "antd";
import React from "react";
import "./index.less";

function App() {
  // 创建ref
  const [form] = Form.useForm();
  console.log(Form.useForm(), "Form.useForm()======");

  const onSubmit = () => {
    console.log(form, "form======");
    form
      .validateFields()
      .then((values) => {
        console.log(values, "val=====");
        this.props.history.push({
          pathname: "/admin",
          state: {
            id: "xuxy",
          },
        });
      })
      .catch((errorInfo) => {
        console.log(errorInfo, "errorInfo=====");
      });
  };

  const onReset = () => {};

  const onFill = () => {};

  return (
    <div className="login-main">
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        form={form}
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
          <Button type="primary" htmlType="submit" onClick={onSubmit}>
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
