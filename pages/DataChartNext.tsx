import React from "react";
import { 
  FIgrDataChart, FIgrCategoryXAxis, FIgrNumericYAxis, FIgrNumericXAxis,
  FIgrLineSeries, FIgrSplineSeries, FIgrStepLineSeries, 
} from "../hooks/useDataChart";
import { 
  CountryRenewableElectricityItem, CountryRenewableElectricity 
} from "../hooks/CountryRenewableElectricity";

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
          label="X" 
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

        <FIgrSplineSeries 
          name="series2" 
          valueMemberPath="China"
          xAxisName="xAxis"
          yAxisName="yAxis" 
        ></FIgrSplineSeries>

        <FIgrStepLineSeries 
          name="series3" 
          valueMemberPath="Russia"
          xAxisName="xAxis" 
          yAxisName="yAxis" 
        ></FIgrStepLineSeries>

      </FIgrDataChart>
      </div>
    </div>    
  );

};

export default DataChartNext;
