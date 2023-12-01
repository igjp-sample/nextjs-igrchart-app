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
  const crosshairLayerRef1 = useRef<IgrCrosshairLayer>(null);
  const crosshairLayerRef2 = useRef<IgrCrosshairLayer>(null);
  const lineSeriesRef = useRef<IgrLineSeries>(null);
  const splineSeriesRef = useRef<IgrSplineSeries>(null);
  const stepLineSeriesRef = useRef<IgrStepLineSeries>(null);
  const overlayRef = useRef(null);

  // 固定Y軸の値
  const [usValue, setUsValue] = useState(0);
  const [chValue, setChValue] = useState(0);
  const [ruValue, setRuValue] = useState(0);

  // ハイライトモード
  const [highlightingMode, setHighlightingMode] = useState("FadeOthers");
  // Auto
  // Brighten
  // BrightenSpecific
  // FadeOthers
  // FadeOthersSpecific
  // None  

  // 描画している線の太さ
  const [lineThickness, setLineThickness] = useState(5);

  // チャートのrefを設定
  const onChartRef = (chart: IgrDataChart) => {
    if (!chart) { return; }

    // 上下グラフの同期
    chart.syncChannel = "channelA";
    chart.synchronizeHorizontally = true; // 横軸の同期
    chart.synchronizeVertically = true; // 縦軸の同期

    //固定Y軸の描画
    chart.actualWindowRectChanged = (s, e) => {
      const x = e.newRect.left + e.newRect.width / 2;
      const y = e.newRect.top + e.newRect.height / 2;
      const x2 = e.newRect.left + e.newRect.width / 2 + 0.2;
      if(crosshairLayerRef1.current) {
        crosshairLayerRef1.current.cursorPosition = { x: x, y: y };
        crosshairLayerRef2.current.cursorPosition = { x: x2, y: y };
        setUsValue(lineSeriesRef.current?.getSeriesValue({ x: x, y: y }, true, true) || 0);
        setChValue(splineSeriesRef.current?.getSeriesValue({ x: x, y: y }, true, true) || 0);
        setRuValue(stepLineSeriesRef.current?.getSeriesValue({ x: x, y: y }, true, true) || 0);
      }
    };
  };

  // 固定Y軸の描画
  const onCrosshairLayerRef1 = (crosshairLayer: IgrCrosshairLayer) => {
    if (!crosshairLayer) { return; }
    crosshairLayerRef1.current = crosshairLayer;
    crosshairLayerRef1.current.cursorPosition = { x: 0.5, y: 0.5 };
  };

  // 2本目のY軸の描画
  const onCrosshairLayerRef2 = (crosshairLayer: IgrCrosshairLayer) => {
    if (!crosshairLayer) { return; }
    crosshairLayerRef2.current = crosshairLayer;
    crosshairLayerRef2.current.cursorPosition = { x: 0.5 + 0.2, y: 0.5 };
    crosshairLayerRef2.current.getItemIndex({ x: 0.2, y: 0.2 })
  };

  // チャートのrefを設定
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

  // ハイライトモードの変更
  const onHighlightingModeChanged = (newMode: string) => {
    setHighlightingMode(newMode);
    if (chartRef.current && crosshairLayerRef1.current) {
      const strokeColor = newMode === "None" ? "Transparent" : "Black";
      crosshairLayerRef1.current.outline = strokeColor;
    }
  };

  // 線の太さの変更
  const onLineThicknessChanged = (newThickness: number) => {
    setLineThickness(newThickness);
    if (chartRef.current && lineSeriesRef.current) {
      lineSeriesRef.current.thickness = newThickness;
    }
  };

  // ハイライトモードの変更に伴う処理
  useEffect(() => {
    if (chartRef.current && crosshairLayerRef1.current) {
      const strokeColor = highlightingMode === "None" ? "Transparent" : "Black";
      crosshairLayerRef1.current.outline = strokeColor;
    }
  }, [highlightingMode]);

  // データ表示ボタンの処理
  const onVieDataButtonClick = () => {
    const overlay = document.createElement("div");
    overlay.style.position = "absolute";
    overlay.style.top = "520px"; // 適切な位置を指定
    overlay.style.left = "50%";
    overlay.style.transform = "translate(-50%, -50%)";
    overlay.style.backgroundColor = "rgba(255, 0, 0, 0.5)"; // 適切なスタイルを指定
    overlay.style.padding = "10px";
    overlay.style.borderRadius = "5px";

    // テキストを作成
    overlay.innerText = usValue.toString();
    // 既存のオーバーレイをクリア
    overlayRef.current.innerHTML = "";
    // オーバーレイに追加
    overlayRef.current.appendChild(overlay);
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
          {/* オーバーレイ用のコンテナ */}
          <div ref={overlayRef} style={{ position: "relative" }} />

          {/* チャート（上） */}
          <FIgrDataChart
            ref={onChartRef}
            width="800px"
            height="80px"
            dataSource={dummyData}
            bottomMargin={10}
          >
            {/* X軸・Y軸 */}
            <FIgrCategoryXAxis name="xAxis" label="X" labelVisibility={1} />
            <FIgrNumericYAxis name="yAxis" labelVisibility={1} maximumValue={4} minimumValue={-2} majorStroke="white" />

            {/* ライン */}
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

          {/* チャート（下） */}
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
            {/* X軸・Y軸 */}
            <FIgrCategoryXAxis name="xAxis" label="X" />
            <FIgrNumericYAxis name="yAxis" labelVisibility={1} />

            {/* ライン */}
            <FIgrLineSeries
              ref={onLineSeriesRef}
              name="series1"
              title="USA"
              valueMemberPath="USA"
              xAxisName="xAxis"
              yAxisName="yAxis"
              thickness={lineThickness}
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

            {/* 固定Y軸1st・固定Y軸2nd */}
            <FIgrCrosshairLayer
              ref={onCrosshairLayerRef1}
              name="CrosshairLayer1"
              brush="Black"
              horizontalLineVisibility="Collapsed"
              showDefaultTooltip="true"
            />
            <FIgrCrosshairLayer
              ref={onCrosshairLayerRef2}
              name="CrosshairLayer2"
              brush="red"
              horizontalLineVisibility="Collapsed"
              showDefaultTooltip="true"
            />
          </FIgrDataChart>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "10px" }}>
        {/* ハイライトモード変更用のボタン */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "10em", fontWeight: "bold", marginRight: "1em" }}>ハイライトモード</div>
          <div style={{ display: "flex" }}>
            <button onClick={() => onHighlightingModeChanged("FadeOthers")}>FadeOthers</button>
            <div style={{ width: "1em" }} /> {/* 間隔用のディバイダー */}
            <button onClick={() => onHighlightingModeChanged("Brighten")}>Brighten</button>
          </div>
        </div>

        {/* 線の太さ変更用のボタン */}
        <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
          <div style={{ width: "10em", fontWeight: "bold", marginRight: "1em" }}>ラインの強調</div>
          <div style={{ display: "flex" }}>
            <button onClick={() => onLineThicknessChanged(2)}>Thickness 2</button>
            <div style={{ width: "1em" }} /> {/* 間隔用のディバイダー */}
            <button onClick={() => onLineThicknessChanged(5)}>Thickness 5</button>
            <div style={{ width: "1em" }} /> {/* 間隔用のディバイダー */}
            <button onClick={() => onLineThicknessChanged(8)}>Thickness 8</button>
          </div>
        </div>

        {/* データ表示ボタン */}
        <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
          <div style={{ width: "10em", fontWeight: "bold", marginRight: "1em" }}>テキストの表示</div>
            <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
              <button onClick={onVieDataButtonClick}>ViewData</button>
            </div>
        </div>
      </div>

    </div>
  );
};

export default DataChartNext;
