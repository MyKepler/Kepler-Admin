// 类组件
import React from "react";
// import "./index.less";
import { Card, Row, Col, Button } from "antd";

class App extends React.Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Todo" extra={<Button type="primary">新建任务</Button>}>
            <Card
                title="任务一"
                type="inner"
                extra={
                  <Button type="primary" ghost>
                    点击开始
                  </Button>
                }
              >
                <p>Card content</p>
              </Card>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Doing">
              <Card
                title="任务二"
                type="inner"
                extra={
                  <Button type="primary" ghost>
                    点击完成
                  </Button>
                }
              >
                <p>Card content</p>
              </Card>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Done">
              <Card
                title="任务三"
                type="inner"
                extra={
                  <Button type="primary" ghost>
                    查看详情
                  </Button>
                }
              >
                <p>Card content</p>
              </Card>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
