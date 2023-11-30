import React, { useRef } from "react";
import {
  FIgrDataChart, FIgrCategoryXAxis, FIgrNumericYAxis,
  FIgrLineSeries, FIgrSplineSeries, FIgrStepLineSeries,
  FIgrCrosshairLayer
} from "../hooks/useDataChart";
import {
  CountryRenewableElectricityItem, CountryRenewableElectricity
} from "../hooks/CountryRenewableElectricity";
import { IgrDataChart, IgrCrosshairLayer, IgrLineSeries, IgrSplineSeries, IgrStepLineSeries } from "igniteui-react-charts";
import styles from "../styles/Home.module.css";

class DataChartNext extends React.Component<{}, {usValue: number, chValue: number, ruValue: number}> {
  public dummyData: CountryRenewableElectricityItem[] = new CountryRenewableElectricity();
  public chart: IgrDataChart;
  public crosshairLayer: IgrCrosshairLayer;
  public lineSeries: IgrLineSeries;
  public splineSeries: IgrSplineSeries;
  public stepLineSeries: IgrStepLineSeries;

  constructor(props) {
    super(props);

    console.log(this.dummyData);
    this.onChartRef = this.onChartRef.bind(this);
    this.onCrosshairLayerRef = this.onCrosshairLayerRef.bind(this);
    this.onLineSeriesRef = this.onLineSeriesRef.bind(this);
    this.onSplineSeriesRef = this.onSplineSeriesRef.bind(this);
    this.onStepLineSeriesRef = this.onStepLineSeriesRef.bind(this);

    this.state = {
      usValue: 0,
      chValue: 0,
      ruValue: 0,
    };
  }

  onChartRef = (chart: IgrDataChart) => {
    if (!chart) { return; }

    chart.syncChannel = "channelA";
    chart.synchronizeHorizontally = true;
    this.chart = chart;
    chart.actualWindowRectChanged = (s, e) => {
      const x = e.newRect.left + e.newRect.width / 2;
      const y = e.newRect.top + e.newRect.height / 2;
      if(this.crosshairLayer) {
        this.crosshairLayer.cursorPosition = { x: x, y: y };
        this.setState({
          usValue: this.lineSeries.getSeriesValue({ x: x, y: y }, true, true),
          chValue: this.splineSeries.getSeriesValue({ x: x, y: y }, true, true),
          ruValue: this.stepLineSeries.getSeriesValue({ x: x, y: y }, true, true),
        });
      }
    }
  };

  onCrosshairLayerRef = (crosshairLayer: IgrCrosshairLayer) => {
    if (!crosshairLayer) { return; }
    this.crosshairLayer = crosshairLayer;
    this.crosshairLayer.cursorPosition = { x: 0.5, y: 0.5 };
  };

  onLineSeriesRef = (lineSeries: IgrLineSeries) => {
    if (!lineSeries) { return; }
    this.lineSeries = lineSeries;
  };

  onSplineSeriesRef = (splineSeries: IgrSplineSeries) => {
    if (!splineSeries) { return; }
    this.splineSeries = splineSeries;
  };

  onStepLineSeriesRef = (stepLineSeries: IgrStepLineSeries) => {
    if (!stepLineSeries) { return; }
    this.stepLineSeries = stepLineSeries;
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={`${styles.container} ${styles.row_layout}`} style={{ height: "100%" }}>
          <div>
            <dl>
              <dt>USA</dt>
              <dd>{ this.state.usValue }</dd>
            </dl>
            <dl>
              <dt>China</dt>
              <dd>{ this.state.chValue }</dd>
            </dl>
            <dl>
              <dt>Russia</dt>
              <dd>{ this.state.ruValue }</dd>
            </dl>
          </div>
          <div>
            <FIgrDataChart
              ref={this.onChartRef}
              width="800px"
              height="40px"
              dataSource={this.dummyData}
              bottomMargin={10}
            >
              <FIgrCategoryXAxis name="xAxis" label="X" labelVisibility={1} />
              <FIgrNumericYAxis name="yAxis" labelVisibility={1} maximumValue={2} minimumValue={-2} majorStroke="white" />
              <FIgrStepLineSeries
                name="seriesSwitch"
                valueMemberPath="Switch"
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
              leftMargin={0}
              rightMargin={0}
              defaultInteraction="dragPan"
            >
              <FIgrCategoryXAxis name="xAxis" label="X" />
              <FIgrNumericYAxis name="yAxis" labelVisibility={1} />
              <FIgrLineSeries
                ref={this.onLineSeriesRef}
                name="series1"
                title="USA"
                valueMemberPath="USA"
                xAxisName="xAxis"
                yAxisName="yAxis"
              />
              <FIgrSplineSeries
                ref={this.onSplineSeriesRef}
                name="series2"
                valueMemberPath="China"
                xAxisName="xAxis"
                yAxisName="yAxis"
              />
              <FIgrStepLineSeries
                ref={this.onStepLineSeriesRef}
                name="series3"
                valueMemberPath="Russia"
                xAxisName="xAxis"
                yAxisName="yAxis"
              />
              <FIgrCrosshairLayer
                ref={this.onCrosshairLayerRef}
                name="CrosshairLayer"
                brush="Black"
                horizontalLineVisibility="Collapsed"
                showDefaultTooltip="true"
              />
            </FIgrDataChart>
          </div>
        </div>
      </div>
    );
  }
}

export default DataChartNext;
