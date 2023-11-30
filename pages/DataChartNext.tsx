import React, { useRef } from "react";
import {
  FIgrDataChart, FIgrCategoryXAxis, FIgrNumericYAxis,
  FIgrLineSeries, FIgrSplineSeries, FIgrStepLineSeries,
} from "../hooks/useDataChart";
import {
  CountryRenewableElectricityItem, CountryRenewableElectricity
} from "../hooks/CountryRenewableElectricity";
import { IgrDataChart } from "igniteui-react-charts";

class DataChartNext extends React.Component {
  public dummyData: CountryRenewableElectricityItem[] = new CountryRenewableElectricity();
  public chart: IgrDataChart;
  readonly highlightingMode = "FadeOthersSpecific";
  // Auto
  // Brighten
  // BrightenSpecific
  // FadeOthers
  // FadeOthersSpecific
  // None

  constructor(props) {
    super(props);

    console.log(this.dummyData);
    this.onChartRef = this.onChartRef.bind(this);
  }

  onChartRef = (chart: IgrDataChart) => {
    if (!chart) { return; }

    chart.syncChannel = "channelA";
    chart.synchronizeHorizontally = true;
    chart.synchronizeVertically = true;
  };

  public onHighlightingModeChanged(e: any) {
    const val = e.target.value;
    this.setState({ highlightingMode: val});        
  }  

  render() {
    return (
      <div className="container sample">
        <div className="container" style={{ height: "100%" }}>

          <FIgrDataChart
            ref={this.onChartRef}
            width="800px"
            height="500px"
            dataSource={this.dummyData}
            isHorizontalZoomEnabled={true}
            isVerticalZoomEnabled={true}
          >
            <FIgrCategoryXAxis name="xAxis" label="X" />
            <FIgrNumericYAxis name="yAxis" />
            <FIgrStepLineSeries
              name="series3"
              valueMemberPath="Russia"
              xAxisName="xAxis"
              yAxisName="yAxis"
            />
          </FIgrDataChart>

          <FIgrDataChart
            ref={this.onChartRef}
            width="800px"
            height="500px"
            dataSource={this.dummyData}
            isHorizontalZoomEnabled={true}
            isVerticalZoomEnabled={true}
            highlightingMode={this.highlightingMode}
            >
            <FIgrCategoryXAxis name="xAxis" label="X" />
            <FIgrNumericYAxis name="yAxis" />
            <FIgrLineSeries
              name="series1"
              title="USA"
              valueMemberPath="USA"
              xAxisName="xAxis"
              yAxisName="yAxis"
            />
            <FIgrSplineSeries
              name="series2"
              valueMemberPath="China"
              xAxisName="xAxis"
              yAxisName="yAxis"
            />
            <FIgrStepLineSeries
              name="series3"
              valueMemberPath="Russia"
              xAxisName="xAxis"
              yAxisName="yAxis"
            />
          </FIgrDataChart>
        </div>
      </div>
    );
  }

}

export default DataChartNext;
