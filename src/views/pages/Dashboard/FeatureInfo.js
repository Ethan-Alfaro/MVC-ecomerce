import React from "react";
import "./featureinfo.css";
import { ArrowUpward } from "@material-ui/icons";

export default function FeatureInfo() {
  return (
    <div className="featureInfo">
      <div className="featureItem">
        <span className="featureTitle">Revenue</span>
        <div className="featureMoneyContainer">
          <span className="featureMoney">20359,6€</span>
          <span className="featureMoneyRate">
            +10,62 <ArrowUpward className="featureIcon" />
          </span>
        </div>
        <span className="featureCompareRevenue">Compare to Q1</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Sales</span>
        <div className="featureMoneyContainer">
          <span className="featureMoney">42343,5€</span>
          <span className="featureMoneyRate">
            +10,62 <ArrowUpward className="featureIcon" />
          </span>
        </div>
        <span className="featureCompareRevenue">Compare to Q1</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Cost</span>
        <div className="featureMoneyContainer">
          <span className="featureMoney">20355,22€</span>
          <span className="featureMoneyRate">
            +20,62 <ArrowUpward className="featureIcon" />
          </span>
        </div>
        <span className="featureCompareRevenue">Compare to Q1</span>
      </div>
    </div>
  );
}
