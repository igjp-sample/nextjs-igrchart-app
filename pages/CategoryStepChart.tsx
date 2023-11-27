import React from "react";
import { useRef, useState} from "react";
import { IgrCategoryChart , IgrLegend} from "igniteui-react-charts";
import { IgnCategoryChart , IgnLegend} from "../hooks/useSplineChart";
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from "../hooks/CountryRenewableElectricity";

const CategorySplineChart = () => {
  const categoryChartRef = useRef<IgrCategoryChart>(null);
  const legendRef = useRef<IgrLegend>(null);

  const dummyData: CountryRenewableElectricityItem[] = [
    { x: `10km`,A: 2,B: 4,C: 6 },
    { x: `20km`,A: 2,B: 4,C: 6 },
    { x: `30km`,A: 3,B: 4,C: 6 },
    { x: `40km`,A: 2,B: 5,C: 6 },
    { x: `50km`,A: 2,B: 4,C: 7 },
    { x: `60km`,A: 2,B: 4,C: 6 },
    { x: `70km`,A: 3,B: 4,C: 6 },
    { x: `80km`,A: 2,B: 5,C: 6 },
    { x: `100km`,A: 2,B: 4,C: 7 },
    { x: `110km`,A: 2,B: 4,C: 6 },
    { x: `120km`,A: 3,B: 4,C: 6 },
    { x: `130km`,A: 2,B: 5,C: 6 },
    { x: `140km`,A: 2,B: 4,C: 7 },
    { x: `150km`,A: 2,B: 4,C: 6 },
    { x: `160km`,A: 2,B: 4,C: 6 },
  ];
  console.log(dummyData);

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
          chartType="StepLine" // ここを変更(Spline)
          dataSource={dummyData}
          legend={legendRef.current}
          width="800px"
          height="800px"
          yAxisTitle="TWh"
          isTransitionInEnabled={true}
          isHorizontalZoomEnabled={true}
          isVerticalZoomEnabled={false}
          isCategoryHighlightingEnabled={true}
          >
        </IgnCategoryChart>
      </div>
    </div>
  );

};

export default CategorySplineChart;
