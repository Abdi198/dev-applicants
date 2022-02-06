import React from "react";
import { getLCP, getFID, getCLS } from "web-vitals";
import { GridWrap, GridRow, GridColumn } from "emotion-flex-grid";
import Cardo from "./components/Cardo";
import Dashboard from "./components/Dashboard";
import Pricing from "./components/Pricing";
import Company from "./components/Company";
import Deposit from "./components/Deposit";

if (typeof window !== "undefined") {
  getCLS(console.log);
  getFID(console.log);
  getLCP(console.log);

  const Axe = require("@axe-core/react");
  Axe(React, 1000);
}

function App() {
  return (
    <div>
     <h2>Salaamu Caleykum!</h2>
     {/* <Cardo>Landing Page</Cardo>
     <Deposit>Deposit</Deposit>
     <Company>Company</Company>
     <Dashboard>Dashboard</Dashboard>
     <Pricing>Pricing$$</Pricing> */}
     <section>
    <GridColumn mx={['s', 'm']}>
      <GridWrap>
        <GridRow>
          <GridColumn width={[12, 3]}>
            <div>Content</div>
          </GridColumn>
          <GridColumn width={[12, 3]}>
            <div>Content</div>
          </GridColumn>
          <GridColumn width={[12, 3]}>
            <div>Content</div>
          </GridColumn>
        </GridRow>
      </GridWrap>
    </GridColumn>
  </section>

    </div>
  );
}

export default App;
