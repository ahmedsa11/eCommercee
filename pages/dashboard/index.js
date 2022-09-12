import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Admins from "../../components/dashboard/admins";
import Brand from "../../components/dashboard/brand";
import Categoriesdash from "../../components/dashboard/categories";
import Laydashboard from "../../components/dashboard/layout";
import Productdash from "../../components/dashboard/producrs";
const Dashboard = () => {
  return (
    <React.Fragment>
      <Laydashboard>
        <Tabs
          defaultActiveKey="categories"
          id="uncontrolled-tab-example"
          className="mb-3 justify-content-center"
        >
          <Tab eventKey="categories" title="Categories">
            <h1 className="text-center">Categories</h1>
            <Categoriesdash />
          </Tab>
          <Tab eventKey="products" title="Products">
            <Productdash />
          </Tab>
          <Tab eventKey="brands" title="Brands">
            <Brand />
          </Tab>
          <Tab eventKey="orders" title="Orders">
            orders
          </Tab>
          <Tab eventKey="admins" title="Admins">
            <Admins/>
          </Tab>
        </Tabs>
      </Laydashboard>
    </React.Fragment>
  );
};

export default Dashboard;
