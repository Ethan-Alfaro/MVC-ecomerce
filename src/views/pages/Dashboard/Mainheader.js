import React from "react";
import FeatureInfo from "./FeatureInfo";
import Charts from "./Charts";
import { userData } from "./Fakedata";
import WidgetSm from "./WidgetSm";
import WidgetXl from "./WidgetXl";
import "./mainheader.css";

export default function Mainheader() {
  return (
    <div className="mainHeader pt-3">
      <FeatureInfo />
      <Charts
        data={userData}
        title="Users analytics"
        grid
        dataKey="Active users"
      />
      <div className="widgets">
        <WidgetSm />
        <WidgetXl />
      </div>
    </div>
  );
}
