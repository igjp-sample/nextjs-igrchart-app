import React from "react";
import {
  FIgrDataChart, FIgrCategoryXAxis, FIgrNumericYAxis,
  FIgrLineSeries, FIgrSplineSeries, FIgrStepLineSeries,
} from "../hooks/useDataChart";
import {
  CountryRenewableElectricityItem, CountryRenewableElectricity
} from "../hooks/CountryRenewableElectricity";
import { IgrDataChart, IgrLineSeries } from "igniteui-react-charts";

interface DataChartNextState {
  series1Thickness: number;
}

class DataChartNext extends React.Component<{}, DataChartNextState> {
  public dummyData: CountryRenewableElectricityItem[] = new CountryRenewableElectricity();
  public chart: IgrDataChart;
  readonly highlightingMode = "FadeOthersSpecific";

  constructor(props) {
    super(props);

    this.state = {
      series1Thickness: 1,
    };

    this.onChartRef = this.onChartRef.bind(this);
    this.handleHighlightButtonClick = this.handleHighlightButtonClick.bind(this);
  }

  onChartRef = (chart: IgrDataChart) => {
    if (!chart) { return; }

    this.chart = chart;
    console.log("Step 1");
  };

  handleHighlightButtonClick = () => {
    console.log("Step 2");

    if (this.chart) {
      console.log("Step 3");

      const series1 = this.chart.series.findByName("series1") as IgrLineSeries;

      if (series1) {
        console.log("Step 4");
        // thickness の値を変更して線の太さを調整
        series1.thickness = 5;

        // forceUpdateで再描画をトリガー
        this.forceUpdate(() => {
          console.log("Step 5: forceUpdate is completed.");
          console.log("Updated series1Thickness:", this.state.series1Thickness);
          console.log("Updated series1 thickness:", series1.thickness);
        });
      }
    }
  };

  render() {
    const { series1Thickness } = this.state;

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
              thickness={series1Thickness}
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

          <button onClick={this.handleHighlightButtonClick}>Highlight Series</button>
        </div>
      </div>
    );
  }
}

export default DataChartNext;
