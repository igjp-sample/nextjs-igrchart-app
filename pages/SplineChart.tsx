import React from 'react';
import { useRef, useState} from 'react';
import { IgrCategoryChart , IgrLegend} from "igniteui-react-charts";
import { IgnCategoryChart , IgnLegend} from "../hooks/useSplineChart";
//import { CountryRenewableElectricityItem, CountryRenewableElectricity } from '../hooks/CountryRenewableElectricity';

const SplineChart = () => {
  const categoryChartRef = useRef<IgrCategoryChart>(null);
  const legendRef = useRef<IgrLegend>(null);
  
  const dummyData = [
    { year: `2009`,europe: 34,china: 21,america: 19 },
    { year: `2010`,europe: 43,china: 26,america: 24 },
    { year: `2011`,europe: 66,china: 29,america: 28 },
    { year: `2012`,europe: 69,china: 32,america: 26 },
    { year: `2013`,europe: 58,china: 47,america: 38 },
    { year: `2014`,europe: 40,china: 46,america: 31 },
    { year: `2015`,europe: 78,china: 50,america: 19 },
    { year: `2016`,europe: 13,china: 90,america: 52 },
    { year: `2017`,europe: 78,china: 132,america: 50 },
    { year: `2018`,europe: 40,china: 134,america: 34 },
    { year: `2018`,europe: 40,china: 134,america: 34 },
    { year: `2019`,europe: 80,china: 96,america: 38 },
  ];

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
          legend={legendRef}
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
