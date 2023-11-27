import dynamic from "next/dynamic";
import React, { LegacyRef, forwardRef, PropsWithChildren } from "react";
import { IgrDataChart, IIgrDataChartProps } from "igniteui-react-charts";

import { IgrNumericYAxis, IIgrNumericYAxisProps } from "igniteui-react-charts";
import { IgrCategoryXAxis, IIgrCategoryXAxisProps } from "igniteui-react-charts";
import { IgrLineSeries, IIgrLineSeriesProps } from "igniteui-react-charts";

// refを設定するためのインターフェースを定義
interface IIgnDataChartProps extends IIgrDataChartProps {
  dataChartRef: LegacyRef<IgrDataChart>;
}
interface IIgnCategoryXAxisProps extends IIgrCategoryXAxisProps {
  categoryXAxisRef: LegacyRef<IgrCategoryXAxis>;
}
interface IIgnNumericYAxisProps extends IIgrNumericYAxisProps {
  numericYAxisRef: LegacyRef<IgrNumericYAxis>;
}
interface IIgnLineSeriesProps extends IIgrLineSeriesProps {
  lineSeriesRef: LegacyRef<IgrLineSeries>;
}

// forwardRefを使ってrefを設定するためのコンポーネントを作成
export const FIgrDataChart = forwardRef<any, PropsWithChildren<IIgrDataChartProps>>((props, ref) => {
  return <IgnDataChart dataChartRef={ref} {...props}>{props.children}</IgnDataChart>
});

export const FIgrCategoryXAxis = forwardRef<any, IIgrCategoryXAxisProps>((props, ref) => {
  return <IgnCategoryXAxis categoryXAxisRef={ref} {...props}></IgnCategoryXAxis>
});

export const FIgrNumericYAxis = forwardRef<any, IIgrNumericYAxisProps>((props, ref) => {
  return <IgnNumericYAxis numericYAxisRef={ref} {...props}></IgnNumericYAxis>
});

export const FIgrLineSeries = forwardRef<any, IIgrLineSeriesProps>((props, ref) => {
  return <IgnLineSeries lineSeriesRef={ref} {...props}></IgnLineSeries>
});

// ダイナミックインポートを使ってコンポーネントを読み込む
export const IgnDataChart = dynamic(
  async () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { 
      IgrDataChart,
      IgrDataChartCoreModule,
      IgrDataChartInteractivityModule, 
      IgrDataChartVerticalCategoryModule,
      // IgrDataChartCategoryModule,
      // IgrDataChartAnnotationModule,
      // IgrDataChartExtendedAxesModule,
     } = await import(
      "igniteui-react-charts"
    );

    IgrDataChartCoreModule.register();
    IgrDataChartInteractivityModule.register();
    IgrDataChartVerticalCategoryModule.register();
    // IgrDataChartCategoryModule.register();
    // IgrDataChartAnnotationModule.register();
    // IgrDataChartExtendedAxesModule.register();

    // ダイナミックインポートが完了したことを確認するためのログ
    console.log("IgrDataChartComponent dynamically imported.");

    // refを設定するために新しく表示用のコンポーネントを作成
    const IgnDataChartComponent = ({
      dataChartRef,
      ...props
    }: IIgnDataChartProps) => {
      return <IgrDataChart ref={dataChartRef} {...props}></IgrDataChart>;
    };

    return IgnDataChartComponent;
  },
  { ssr: false }
);

// ダイナミックインポートを使ってコンポーネントを読み込む
export const IgnNumericYAxis = dynamic(
  async () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { 
      IgrNumericYAxis,
      IgrDataChartCategoryModule,
     } = await import(
      "igniteui-react-charts"
    );

    IgrDataChartCategoryModule.register();

    // ダイナミックインポートが完了したことを確認するためのログ
    console.log("IgrNumericYAxisComponent dynamically imported.");

    // refを設定するために新しく表示用のコンポーネントを作成
    const IgnNumericYAxisComponent = ({
      numericYAxisRef,
      ...props
    }: IIgnNumericYAxisProps) => {
      return <IgrNumericYAxis ref={numericYAxisRef} {...props}></IgrNumericYAxis>;
    };

    return IgnNumericYAxisComponent;
  },
  { ssr: false }
);

// ダイナミックインポートを使ってコンポーネントを読み込む
export const IgnCategoryXAxis = dynamic(
  async () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { 
      IgrCategoryXAxis,
      IgrDataChartCategoryModule,
     } = await import(
      "igniteui-react-charts"
    );

    IgrDataChartCategoryModule.register();

    // ダイナミックインポートが完了したことを確認するためのログ
    console.log("IgrCategoryXAxisComponent dynamically imported.");

    // refを設定するために新しく表示用のコンポーネントを作成
    const IgnCategoryXAxisComponent = ({
      categoryXAxisRef,
      ...props
    }: IIgnCategoryXAxisProps) => {
      return <IgrCategoryXAxis ref={categoryXAxisRef} {...props}></IgrCategoryXAxis>;
    };

    return IgnCategoryXAxisComponent;
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
      lineSeriesRef,
      ...props
    }: IIgnLineSeriesProps) => {
      return <IgrLineSeries ref={lineSeriesRef} {...props}></IgrLineSeries>;
    };

    return IgnLineSeriesComponent;
  },
  { ssr: false }
);
