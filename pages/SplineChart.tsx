import React from 'react';
import { useRef, useState} from 'react';
import { IgrCategoryChart , IgrLegend} from "igniteui-react-charts";
import { IgnCategoryChart , IgnLegend} from "../hooks/useSplineChart";
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from '../hooks/CountryRenewableElectricity';

const SplineChart = () => {
  const categoryChartRef = useRef<IgrCategoryChart>(null);
  const legendRef = useRef<IgrLegend>(null);

  const dummyData: CountryRenewableElectricityItem[] = new CountryRenewableElectricity();
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
          chartType="Spline"
          dataSource={dummyData}
          legend={legendRef.current}
          width="816px"
          height="816px"
          yAxisTitle="TWh"
          isTransitionInEnabled={true}
          isHorizontalZoomEnabled={false}
          isVerticalZoomEnabled={false}
          computedPlotAreaMarginMode="Series">
        </IgnCategoryChart>
      </div>
    </div>
  );

};

export default SplineChart;
