import React from "react";
import { FIgrDataChart, FIgrCategoryXAxis, FIgrNumericYAxis, FIgrLineSeries } from "../hooks/useDataChart";
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from "../hooks/CountryRenewableElectricity";

const DataChartNext = () => {
  const dummyData: CountryRenewableElectricityItem[] = new CountryRenewableElectricity();
  console.log(dummyData);

  return (
    <div className="container sample">
      <div className="container" style={{height: "100%"}}>
      <FIgrDataChart 
        width="800px"
        height="500px"
        dataSource={dummyData}
        isHorizontalZoomEnabled={true}
        isVerticalZoomEnabled={true}>

        <FIgrCategoryXAxis
          name="xAxis" 
          label="Year" 
        ></FIgrCategoryXAxis>

        <FIgrNumericYAxis 
          name="yAxis" 
        ></FIgrNumericYAxis>

        <FIgrLineSeries 
          name="series1" 
          title="USA"
          valueMemberPath="USA"
          xAxisName="xAxis"
          yAxisName="yAxis"
          ></FIgrLineSeries>

        <FIgrLineSeries 
          name="series2" 
          title="China"
          valueMemberPath="China"
          xAxisName="xAxis"
          yAxisName="yAxis"
          ></FIgrLineSeries>

        <FIgrLineSeries 
          name="series3" 
          title="Russia"
          valueMemberPath="Russia"
          xAxisName="xAxis"
          yAxisName="yAxis"
          ></FIgrLineSeries>

      </FIgrDataChart>
      </div>
    </div>    
  );

};

export default DataChartNext;
