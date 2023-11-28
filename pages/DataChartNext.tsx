import React from "react";
import { 
  FIgrDataChart, FIgrCategoryXAxis, FIgrNumericYAxis, FIgrNumericXAxis,
  FIgrLineSeries, FIgrScatterSplineSeries, FIgrStepLineSeries, 
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
          minimumValue={0} 
          maximumValue={140} 
          interval={20}
        ></FIgrNumericYAxis>

        <FIgrNumericXAxis 
          name="xAxis2" 
          minimumValue={0} 
          maximumValue={50} 
          interval={5}
        ></FIgrNumericXAxis>

        <FIgrLineSeries 
          name="series1" 
          title="USA"
          valueMemberPath="USA"
          xAxisName="xAxis"
          yAxisName="yAxis"
        ></FIgrLineSeries>

        <FIgrScatterSplineSeries 
          name="series2" 
          xMemberPath="X" 
          yMemberPath="China"
          xAxisName="xAxis2"
          yAxisName="yAxis" 
          markerType="Circle" 
        ></FIgrScatterSplineSeries>

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
