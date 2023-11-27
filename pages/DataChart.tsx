import React from "react";
import { useRef, useState} from "react";
import { IgrNumericYAxis,IgrCategoryXAxis,IgrLineSeries,IgrDataChart } from "igniteui-react-charts";
import { IgnNumericYAxis,IgnCategoryXAxis,IgnLineSeries,IgnDataChart,FIgrDataChart,FIgrCategoryXAxis } from "../hooks/useDataChart";
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from "../hooks/CountryRenewableElectricity";

const DataChart = () => {
  const dataChartRef = useRef<IgrDataChart>(null);
  const categoryXAxisRef = useRef<IgrCategoryXAxis>(null);
  // const numericYAxisRef = useRef<IgrNumericYAxis>(null);
  // const lineSeriesRef = useRef<IgrLineSeries>(null);

  const dummyData: CountryRenewableElectricityItem[] = new CountryRenewableElectricity();
  console.log(dummyData);
  console.log(dataChartRef);
  console.log(categoryXAxisRef);

  return (
    <div className="container sample">
      <div className="container" style={{height: "100%"}}>
      <FIgrDataChart
        //dataChartRef={dataChartRef}
        width="800px"
        height="500px"
        dataSource={dummyData}
        isHorizontalZoomEnabled={true}
        isVerticalZoomEnabled={true}>

        <FIgrCategoryXAxis
          //categoryXAxisRef={categoryXAxisRef}
          name="xAxis"
          label="Year"
        ></FIgrCategoryXAxis>

        {/* <IgnNumericYAxis
//          numericYAxisRef={numericYAxisRef}
          name="yAxis"
          /> */}

        {/* <IgnLineSeries
//          lineSeriesRef={lineSeriesRef}
          name="series1"
          title="USA"
          valueMemberPath="USA"
          xAxisName="xAxis"
          yAxisName="yAxis" />
        <IgnLineSeries
//          lineSeriesRef={lineSeriesRef}
          name="series2"
          title="China"
          valueMemberPath="China"
          xAxisName="xAxis"
          yAxisName="yAxis" />
        <IgnLineSeries
//          lineSeriesRef={lineSeriesRef}
          name="series3"
          title="Russia"
          valueMemberPath="Russia"
          xAxisName="xAxis"
          yAxisName="yAxis" /> */}

      </FIgrDataChart>

      {/* <IgnDataChart dataChartRef={dataChartRef}
        width="100%"
        height="50%"
        dataSource={dummyData}
        isHorizontalZoomEnabled={true}
        isVerticalZoomEnabled={true} >

        <IgnCategoryXAxis name="xAxis" label="Year" />
        <IgnNumericYAxis name="yAxis" />

        <IgnLineSeries name="series1" title="USA"
          valueMemberPath="USA"
          xAxisName="xAxis"
          yAxisName="yAxis" />
        <IgnLineSeries name="series2" title="China"
          valueMemberPath="China"
          xAxisName="xAxis"
          yAxisName="yAxis" />
        <IgnLineSeries name="series3" title="Russia"
          valueMemberPath="Russia"
          xAxisName="xAxis"
          yAxisName="yAxis" />
      </IgnDataChart> */}

      </div>
    </div>

    // <div className="container sample">
    //   <div className="container fill">
    //     <IgnCategoryChart
    //       categoryChartRef={categoryChartRef}
    //       chartType="Spline" // ここを変更(StepLine)
    //       dataSource={dummyData}
    //       legend={legendRef.current}
    //       width="800px"
    //       height="800px"
    //       yAxisTitle="TWh"
    //       isTransitionInEnabled={true}
    //       isHorizontalZoomEnabled={true}
    //       isVerticalZoomEnabled={false}
    //       isCategoryHighlightingEnabled={true}
    //       xAxisStroke="rgba(145, 145, 145, 1)"
    //       xAxisStrokeThickness="2"
    //       xAxisInterval="1"
    //       xAxisMajorStroke="rgba(71, 71, 71, 1)"
    //       xAxisMajorStrokeThickness="0.5"
    //       yAxisStroke="gray"
    //       yAxisStrokeThickness="2"
    //       yAxisInterval="20"
    //       yAxisMajorStroke="darkslategray"
    //       yAxisMajorStrokeThickness="1"
    //       yAxisMinorInterval="20"
    //       yAxisMinorStroke="gray"
    //       yAxisMinorStrokeThickness="0.5"
    //       thickness="2"
    //       >
    //     </IgnCategoryChart>
    //   </div>
    // </div>

  );

};

export default DataChart;
