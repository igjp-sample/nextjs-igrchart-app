import React from "react";
import { useRef, useState} from "react";
import { IgrCategoryChart , IgrLegend} from "igniteui-react-charts";
import { IgnCategoryChart , IgnLegend} from "../hooks/useSplineChart";
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from "../hooks/CountryRenewableElectricity";

const CategorySplineChart = () => {
  const categoryChartRef = useRef<IgrCategoryChart>(null);
  const legendRef = useRef<IgrLegend>(null);

  const dummyData: CountryRenewableElectricityItem[] = [
    { X: `10km`,USA: 2,China: 4,Russia: 6 },
    { X: `20km`,USA: 2,China: 4,Russia: 6 },
    { X: `30km`,USA: 3,China: 4,Russia: 6 },
    { X: `40km`,USA: 2,China: 5,Russia: 6 },
    { X: `50km`,USA: 2,China: 4,Russia: 7 },
    { X: `60km`,USA: 2,China: 4,Russia: 6 },
    { X: `70km`,USA: 3,China: 4,Russia: 6 },
    { X: `80km`,USA: 2,China: 5,Russia: 6 },
    { X: `100km`,USA: 2,China: 4,Russia: 7 },
    { X: `110km`,USA: 2,China: 4,Russia: 6 },
    { X: `120km`,USA: 3,China: 4,Russia: 6 },
    { X: `130km`,USA: 2,China: 5,Russia: 6 },
    { X: `140km`,USA: 2,China: 4,Russia: 7 },
    { X: `150km`,USA: 2,China: 4,Russia: 6 },
    { X: `160km`,USA: 2,China: 4,Russia: 6 },
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
