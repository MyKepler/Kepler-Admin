import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  PoweroffOutlined,
  CarryOutOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import "./index.less";
import avatar from "../../image/logo512.png";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import Home from "./home/index";
import Todo from "./todo/index";

class App extends React.Component {
  componentDidMount(props) {
    //console.log(this.props.match.params);
    console.log(this.props.history.location);
  }

  state = {
    selectedKeyList: ["Home"],
  };
  handelSelect = (item) => {
    console.log(item, "item, key, keyPath, selectedKeys, domEvent=====");
    this.setState({ selectedKeyList: item.keyPath.reverse() });
  };
  render() {
    return (
      <div>
        <Layout>
          <Layout.Header className="header">
            <span>Kepler学习系统</span>
            <div>
              <img className="avatar-logo" src={avatar} alt="" />
              <PoweroffOutlined className="login-out-logo" />
            </div>

            {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu> */}
          </Layout.Header>
          <Layout>
            <Layout.Sider width={200} className="site-layout-background">
              <Menu
                // theme="dark"
                mode="inline"
                defaultSelectedKeys={["Home"]}
                // defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
                onSelect={this.handelSelect}
              >
                <Menu.Item key="Home" icon={<HomeOutlined />}>
                  <Link to="home">Home</Link>
                </Menu.Item>
                <Menu.Item key="Todo" icon={<CarryOutOutlined />}>
                  <Link to="todo">Todo</Link>
                </Menu.Item>
                <Menu.SubMenu
                  key="Subnav 1"
                  icon={<UserOutlined />}
                  title="Subnav 1"
                >
                  {/* <Menu.Item key="1">Option1</Menu.Item> */}
                  {/* <Menu.Item key="2">Option2</Menu.Item> */}
                  <Menu.Item key="Option1">Option1</Menu.Item>
                  <Menu.Item key="Option2">Option2</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu
                  key="Subnav 2"
                  icon={<LaptopOutlined />}
                  title="Subnav 2"
                >
                  <Menu.Item key="Option3">Option3</Menu.Item>
                  <Menu.Item key="Option4">Option4</Menu.Item>
                  <Menu.Item key="Option5">Option5</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu
                  key="Subnav 3"
                  icon={<NotificationOutlined />}
                  title="Subnav 3"
                >
                  <Menu.Item key="Option6">Option6</Menu.Item>
                  <Menu.Item key="Option7">Option7</Menu.Item>
                  <Menu.Item key="Option8">Option8</Menu.Item>
                </Menu.SubMenu>
              </Menu>
            </Layout.Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                {this.state.selectedKeyList.map((i, index) => {
                  return <Breadcrumb.Item key={index}>{i}</Breadcrumb.Item>;
                })}
              </Breadcrumb>
              <Layout.Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Switch>
                  <Redirect exact={true} from="/" to="/home"></Redirect>
                  <Route path="/home" component={Home} />
                  <Route path="/todo" component={Todo} />
                </Switch>
              </Layout.Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
