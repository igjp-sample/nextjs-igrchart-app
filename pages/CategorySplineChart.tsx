import React from "react";
import { useRef, useState} from "react";
import { IgrCategoryChart , IgrLegend} from "igniteui-react-charts";
import { IgnCategoryChart , IgnLegend} from "../hooks/useSplineChart";
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from "../hooks/CountryRenewableElectricity";

const CategorySplineChart = () => {
  const categoryChartRef = useRef<IgrCategoryChart>(null);
  const legendRef = useRef<IgrLegend>(null);

  const dummyData: CountryRenewableElectricityItem[] = new CountryRenewableElectricity();
  console.log(dummyData);
  console.log(categoryChartRef);
  console.log(legendRef);

  return (
    <div className="container sample">
      <div className="legend-title">
        Renewable Electricity Generated
      </div>

      <div className="legend">
        <IgnLegend
          legendRef={legendRef}
          orientation="Horizontal">
        </IgnLegend>
      </div>

      <div className="container fill">
        <IgnCategoryChart
          categoryChartRef={categoryChartRef}
          chartType="Spline" // ここを変更(StepLine)
          dataSource={dummyData}
          legend={legendRef.current}
          width="800px"
          height="800px"
          yAxisTitle="TWh"
          isTransitionInEnabled={true}
          isHorizontalZoomEnabled={true}
          isVerticalZoomEnabled={false}
          isCategoryHighlightingEnabled={true}
          xAxisStroke="rgba(145, 145, 145, 1)"
          xAxisStrokeThickness="2"
          xAxisInterval="1"
          xAxisMajorStroke="rgba(71, 71, 71, 1)"
          xAxisMajorStrokeThickness="0.5"
          yAxisStroke="gray"
          yAxisStrokeThickness="2"
          yAxisInterval="20"
          yAxisMajorStroke="darkslategray"
          yAxisMajorStrokeThickness="1"
          yAxisMinorInterval="20"
          yAxisMinorStroke="gray"
          yAxisMinorStrokeThickness="0.5"
          thickness="2"
          >
        </IgnCategoryChart>
      </div>
    </div>
  );

};

export default CategorySplineChart;
