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
  renderingText: string;
}

class DataChartNext extends React.Component<{}, DataChartNextState> {
  public dummyData: CountryRenewableElectricityItem[] = new CountryRenewableElectricity();
  public chartRef: IgrDataChart;
  readonly highlightingMode = "FadeOthersSpecific";

  constructor(props) {
    super(props);

    this.state = {
      series1Thickness: 1,
      renderingText: "", // 新しい state の初期値
    };

    this.onChartRef = this.onChartRef.bind(this);
    this.handleHighlightButtonClick = this.handleHighlightButtonClick.bind(this);
  }

  onChartRef = (chart: IgrDataChart) => {
    if (!chart) { return; }

    this.chartRef = chart;
    console.log("Step 1");
    console.log("Chart series:", this.chartRef.series);
  };

  componentDidMount() {
  //   // コンポーネントがマウントされた後に handleHighlightButtonClick を呼び出す
  //   this.handleHighlightButtonClick();
  }
  
  handleHighlightButtonClick = () => {
    console.log("Step 2");
  
    if (this.chartRef) {
      console.log("Step 3");
  
      const series1 = this.chartRef.series.findByName("series1") as IgrLineSeries;
      // ここで series1 は null になる
      console.log("series1:", series1);

      if (series1) {
        console.log("Step 4");
        // thickness の値を変更して線の太さを調整
        series1.thickness = 5;
  
        // setState を使って状態を更新
        this.setState({
          series1Thickness: 5,
          renderingText: "ボタンがクリックされました",
        }, () => {
          console.log("Step 5: setState is completed.");
          console.log("Updated series1Thickness:", this.state.series1Thickness);
          console.log("Updated series1 thickness:", series1.thickness);
  
          // ログを追加
          console.log("Rendering text:", this.state.renderingText);
        });
      }
    }
  };

  render() {
    const { series1Thickness, renderingText } = this.state;

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

          {/* 新しい state を元に表示する */}
          <div>{renderingText}</div>
        </div>
      </div>
    );
  }
}

export default DataChartNext;
