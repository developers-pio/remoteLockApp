import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import { Devices, Users } from "~/components";
import "bootstrap/dist/css/bootstrap.min.css";
import "~/theme.scss";
import "~/global.scss";
import "~/app.scss";

const App = () => {
  return (
    <div className="App">
      <Container className="app-content py-3">
        <Tabs
          variant="pills"
          defaultActiveKey="devices"
          id="pages-tab"
          className="page-tabs mb-3"
        >
          <Tab eventKey="devices" title="Devices" className="page-tab">
            <Devices />
          </Tab>
          <Tab eventKey="users" title="Users" className="page-tab">
            <Users />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default App;
