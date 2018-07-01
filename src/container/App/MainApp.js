import React, {Component} from "react";
import {Layout} from "antd";

import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import {footerText} from "util/config";
import App from "routes/index";
import Customizer from "container/Customizer";

const {Content, Footer} = Layout;


export class  MainApp extends Component {


  render() {
    const {match} = this.props;

    return (
      <Layout>
        <Sidebar/>

        <Layout>
          <Topbar/>
          <Content>
            <App match={match}/>
            <Footer>
              {footerText}
            </Footer>
          </Content>
        </Layout>
        <Customizer/>
      </Layout>
    )
  }
}

export default MainApp;
