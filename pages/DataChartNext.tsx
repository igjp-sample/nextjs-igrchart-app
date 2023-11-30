import React, { useEffect, useState } from "react";
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

const DataChartNext: React.FC = () => {
  const [chartRef, setChartRef] = useState<IgrDataChart | null>(null);
  const [series1Thickness, setSeries1Thickness] = useState(1);
  const [renderingText, setRenderingText] = useState("");

  const dummyData: CountryRenewableElectricityItem[] = new CountryRenewableElectricity();
  const highlightingMode = "FadeOthersSpecific";

  const onChartRef = (chart: IgrDataChart) => {
    setChartRef(chart);
  };

  const handleHighlightButtonClick = () => {
    console.log("Step 2");
  
    if (chartRef) {
      console.log("Step 3");
      console.log("chartRef:", chartRef);
      console.log("chartRef.series:", chartRef.series);

      // chartRef.seriesを配列に変換
      const seriesArray = chartRef.series.toArray();
      // デバッグ用にシリーズの名前を表示
      seriesArray.forEach(series => console.log("Series name:", series.name));
  
      console.log("chartRef.series.item0:", chartRef.series.item(0));
      console.log("chartRef.series.item1:", chartRef.series.item(1));
      console.log("chartRef.series.item2:", chartRef.series.item(2));
  
      // "series1"を見つける
      const series1 = seriesArray.find(series => series.name === "series1") as IgrLineSeries;
  
      if (series1) {
        console.log("Step 4");
        // thickness の値を変更して線の太さを調整
        series1.thickness = 5;
  
        // ローカル変数を更新
        setSeries1Thickness(5);
        setRenderingText("ボタンがクリックされました");
  
        console.log("Step 5: setState is completed.");
        console.log("Updated series1Thickness:", series1Thickness);
        console.log("Updated series1 thickness:", series1.thickness);
  
        // ログを追加
        console.log("Rendering text:", renderingText);
      } else {
        console.log("Series not found");
      }
    }
  };
  
  return (
    <div className="container sample">
      <div className="container" style={{ height: "100%" }}>
        <FIgrDataChart
          ref={onChartRef}
          width="800px"
          height="500px"
          dataSource={dummyData}
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
          dataSource={dummyData}
          isHorizontalZoomEnabled={true}
          isVerticalZoomEnabled={true}
          highlightingMode={highlightingMode}
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

        <button onClick={handleHighlightButtonClick}>Highlight Series</button>

        {/* 新しい state を元に表示する */}
        <div>{renderingText}</div>
      </div>
    </div>
  );
};

export default DataChartNext;
