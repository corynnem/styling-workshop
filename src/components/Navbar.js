import React from 'react';
import { Menu, Layout } from 'antd'
import {
  QuestionCircleOutlined,
  ShopOutlined,
  ToolOutlined,
  ContactsOutlined
} from '@ant-design/icons'

const { Header } = Layout
  
class Sitebar extends React.Component {
  constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <div>
          <Layout className="layout">
            <div href="/"  >ORION</div>
            <button onClick={this.toggle} />
            <div isOpen={this.state.isOpen} navbar>
              <Header className="ml-auto" navbar>
                <Menu defaultSelectedKeys={["1"]} mode="horizontal" theme="dark">
                  <Menu.Item key="1" icon={<ShopOutlined/>}>
                    <a href="/components/" >SHOP</a>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<QuestionCircleOutlined/>}>
                    <a href="https://github.com/reactstrap/reactstrap"  >FAQ</a>
                  </Menu.Item>
                  <Menu.Item key="3" icon={<ToolOutlined/>}>
                    <a href="https://github.com/reactstrap/reactstrap"  >SUPPORT</a>
                  </Menu.Item>
                  <Menu.Item key="4" icon={<ContactsOutlined/>}>
                    <a href="https://github.com/reactstrap/reactstrap"  >MAINTENANCE</a>
                  </Menu.Item>
                </Menu>
              </Header>
            </div>
          </Layout>
        </div>
      );
    }
}

export default Sitebar;