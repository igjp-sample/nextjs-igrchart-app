import dynamic from "next/dynamic";
import React, { LegacyRef } from "react";
import { IgrDataChart, IIgrDataChartProps } from "igniteui-react-charts";

import { IgrNumericYAxis, IIgrNumericYAxisProps } from "igniteui-react-charts";
import { IgrCategoryXAxis, IIgrCategoryXAxisProps } from "igniteui-react-charts";
import { IgrLineSeries, IIgrLineSeriesProps } from "igniteui-react-charts";

// ref インターフェース
interface IIgnDataChartProps extends IIgrDataChartProps {
  dataChartRef: LegacyRef<IgrDataChart>;
}
interface IIgnCategoryXAxisProps extends IIgrCategoryXAxisProps {
  categoryXAxisRef: LegacyRef<IgrCategoryXAxis>;
  name : string;
  label : string;
}
interface IIgnNumericYAxisProps extends IIgrNumericYAxisProps {
//  numericYAxisRef: LegacyRef<IgrNumericYAxis>;
//  nameYAxis : string;
}
interface IIgnLineSeriesProps extends IIgrLineSeriesProps {
//  lineSeriesRef: LegacyRef<IgrLineSeries>;
//  valueMemberPath : string;
//  xAxisName : string;
//  yAxisName : string;
}

export const IgnDataChart = dynamic(
  async () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { 
      IgrDataChart,
      IgrDataChartCoreModule,
      IgrDataChartCategoryModule,

      IgrDataChartInteractivityModule, 
      IgrCategoryChartCoreModule,
      IgrDataChartVerticalCategoryModule,
      IgrDataChartAnnotationModule,
      IgrDataChartExtendedAxesModule,
     } = await import(
      "igniteui-react-charts"
    );

    IgrDataChartCoreModule.register();
    IgrDataChartCategoryModule.register();

    IgrDataChartInteractivityModule.register();
    IgrCategoryChartCoreModule.register();
    IgrDataChartVerticalCategoryModule.register();
    IgrDataChartAnnotationModule.register();
    IgrDataChartExtendedAxesModule.register();

    // ダイナミックインポートが完了したことを確認するためのログ
    console.log("IgrDataChartComponent dynamically imported.");

    // refを設定するために新しく表示用のコンポーネントを作成
    const IgnDataChartComponent = ({
      dataChartRef,
      ...props
    }: IIgnDataChartProps) => {
      return <IgrDataChart ref={dataChartRef} {...props} />;
    };

    return IgnDataChartComponent;
  },
  { ssr: false }
);

export const IgnCategoryXAxis = dynamic(
  async () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { 
      IgrCategoryXAxis,
      IgrCategoryXAxisModule,
     } = await import(
      "igniteui-react-charts"
    );

    IgrCategoryXAxisModule.register();

    // ダイナミックインポートが完了したことを確認するためのログ
    console.log("IgrCategoryXAxisComponent dynamically imported.");

    // refを設定するために新しく表示用のコンポーネントを作成
    const IgnCategoryXAxisComponent = ({
      categoryXAxisRef,
      name,
      label,
      ...props
    }: IIgnCategoryXAxisProps) => {
//      return <IgrCategoryXAxis name="xAxis" {...props} />;
//      return <IgrCategoryXAxis ref={categoryXAxisRef} name={name} {...props} />;
      return <IgrCategoryXAxis ref={categoryXAxisRef} name={name} label={label} {...props} />;
    };

    return IgnCategoryXAxisComponent;
  },
  { ssr: false }
);

export const IgnNumericYAxis = dynamic(
  async () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { 
      IgrNumericYAxis,
      IgrNumericYAxisModule,
     } = await import(
      "igniteui-react-charts"
    );

    IgrNumericYAxisModule.register();

    // ダイナミックインポートが完了したことを確認するためのログ
    console.log("IgrNumericYAxisComponent dynamically imported.");

    // refを設定するために新しく表示用のコンポーネントを作成
    const IgnNumericYAxisComponent = ({
//      numericYAxisRef,
//      name,
      ...props
    }: IIgnNumericYAxisProps) => {
      return <IgrNumericYAxis {...props} />;
//      return <IgrNumericYAxis name={name} {...props} />;
//      return <IgrNumericYAxis ref={numericYAxisRef} name={name} {...props} />;
    };

    return IgnNumericYAxisComponent;
  },
  { ssr: false }
);

export const IgnLineSeries = dynamic(
  async () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { 
      IgrLineSeries,
      IgrLineSeriesModule,
     } = await import(
      "igniteui-react-charts"
    );

    IgrLineSeriesModule.register();

    // ダイナミックインポートが完了したことを確認するためのログ
    console.log("IgrLineSeriesComponent dynamically imported.");

    // refを設定するために新しく表示用のコンポーネントを作成
    const IgnLineSeriesComponent = ({
//      lineSeriesRef,
//      valueMemberPath,
//      xAxisName,
//      yAxisName,
      ...props
    }: IIgnLineSeriesProps) => {
      return <IgrLineSeries {...props} />;
//      return <IgrLineSeries ref={lineSeriesRef} valueMemberPath={valueMemberPath} xAxisName={xAxisName} yAxisName={yAxisName} {...props} />;
    };

    return IgnLineSeriesComponent;
  },
  { ssr: false }
);