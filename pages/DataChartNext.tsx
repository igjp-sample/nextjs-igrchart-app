import React, { useState, useRef, useEffect } from "react";
import {
  FIgrDataChart, FIgrCategoryXAxis, FIgrNumericYAxis,
  FIgrLineSeries, FIgrSplineSeries, FIgrStepLineSeries,
  FIgrCrosshairLayer,
} from "../hooks/useDataChart";
import {
  CountryRenewableElectricity
} from "../hooks/CountryRenewableElectricity";
import { IgrDataChart , IgrCrosshairLayer, IgrLineSeries, IgrSplineSeries, IgrStepLineSeries } from "igniteui-react-charts";
import styles from "../styles/Home.module.css";

const DataChartNext = () => {
  const dummyData = new CountryRenewableElectricity();

  // refを設定するための変数を定義
  const chartRef = useRef<IgrDataChart>(null);
  const crosshairLayerRef = useRef<IgrCrosshairLayer>(null);
  const lineSeriesRef = useRef<IgrLineSeries>(null);
  const splineSeriesRef = useRef<IgrSplineSeries>(null);
  const stepLineSeriesRef = useRef<IgrStepLineSeries>(null);

  // 固定Y軸の値
  const [usValue, setUsValue] = useState(0);
  const [chValue, setChValue] = useState(0);
  const [ruValue, setRuValue] = useState(0);

  // ハイライトモード
  const [highlightingMode, setHighlightingMode] = useState("FadeOthersSpecific");
  // Auto
  // Brighten
  // BrightenSpecific
  // FadeOthers
  // FadeOthersSpecific
  // None  

  // チャートのrefを設定
  const onChartRef = (chart: IgrDataChart) => {
    if (!chart) { return; }

    // 上下グラフの同期
    chart.syncChannel = "channelA";
    chart.synchronizeHorizontally = true;
    chart.synchronizeVertically = true;

    //固定Y軸の描画
    chart.actualWindowRectChanged = (s, e) => {
      const x = e.newRect.left + e.newRect.width / 2;
      const y = e.newRect.top + e.newRect.height / 2;
      if(crosshairLayerRef.current) {
        crosshairLayerRef.current.cursorPosition = { x: x, y: y };
        setUsValue(lineSeriesRef.current?.getSeriesValue({ x: x, y: y }, true, true) || 0);
        setChValue(splineSeriesRef.current?.getSeriesValue({ x: x, y: y }, true, true) || 0);
        setRuValue(stepLineSeriesRef.current?.getSeriesValue({ x: x, y: y }, true, true) || 0);
      }
    };
  };

  // 固定Y軸の描画
  const onCrosshairLayerRef = (crosshairLayer: IgrCrosshairLayer) => {
    if (!crosshairLayer) { return; }
    crosshairLayerRef.current = crosshairLayer;
    crosshairLayerRef.current.cursorPosition = { x: 0.5, y: 0.5 };
  };
  const onLineSeriesRef = (lineSeries: IgrLineSeries) => {
    if (!lineSeries) { return; }
    lineSeriesRef.current = lineSeries;
  };
  const onSplineSeriesRef = (splineSeries: IgrSplineSeries) => {
    if (!splineSeries) { return; }
    splineSeriesRef.current = splineSeries;
  };
  const onStepLineSeriesRef = (stepLineSeries: IgrStepLineSeries) => {
    if (!stepLineSeries) { return; }
    stepLineSeriesRef.current = stepLineSeries;
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.container} ${styles.row_layout}`} style={{ height: "100%" }}>
        <div>
          <dl>
            <dt>USA</dt>
            <dd>{ usValue }</dd>
          </dl>
          <dl>
            <dt>China</dt>
            <dd>{ chValue }</dd>
          </dl>
          <dl>
            <dt>Russia</dt>
            <dd>{ ruValue }</dd>
          </dl>
        </div>
        <div>
          <FIgrDataChart
            ref={onChartRef}
            width="800px"
            height="80px"
            dataSource={dummyData}
            bottomMargin={10}
          >
            <FIgrCategoryXAxis name="xAxis" label="X" labelVisibility={1} />
            <FIgrNumericYAxis name="yAxis" labelVisibility={1} maximumValue={4} minimumValue={-2} majorStroke="white" />
            <FIgrStepLineSeries
              name="seriesSwitch1"
              valueMemberPath="Switch1"
              xAxisName="xAxis"
              yAxisName="yAxis"
            />
            <FIgrStepLineSeries
              name="seriesSwitch2"
              valueMemberPath="Switch2"
              xAxisName="xAxis"
              yAxisName="yAxis"
            />
          </FIgrDataChart>
          <FIgrDataChart
            ref={onChartRef}
            width="800px"
            height="500px"
            dataSource={dummyData}
            isHorizontalZoomEnabled={true}
            isVerticalZoomEnabled={true}
            leftMargin={0}
            rightMargin={0}
            defaultInteraction="dragPan"
            highlightingMode={highlightingMode}
          >
            <FIgrCategoryXAxis name="xAxis" label="X" />
            <FIgrNumericYAxis name="yAxis" labelVisibility={1} />
            <FIgrLineSeries
              ref={onLineSeriesRef}
              name="series1"
              title="USA"
              valueMemberPath="USA"
              xAxisName="xAxis"
              yAxisName="yAxis"
            />
            <FIgrSplineSeries
              ref={onSplineSeriesRef}
              name="series2"
              valueMemberPath="China"
              xAxisName="xAxis"
              yAxisName="yAxis"
            />
            <FIgrStepLineSeries
              ref={onStepLineSeriesRef}
              name="series3"
              valueMemberPath="Russia"
              xAxisName="xAxis"
              yAxisName="yAxis"
            />
            <FIgrCrosshairLayer
              ref={onCrosshairLayerRef}
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
};

export default DataChartNext;
