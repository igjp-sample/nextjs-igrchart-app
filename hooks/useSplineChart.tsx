import dynamic from "next/dynamic";
import React, { LegacyRef } from "react";
import { IgrCategoryChart, IIgrCategoryChartProps } from "igniteui-react-charts";
import { IgrLegend, IIgrLegendProps } from "igniteui-react-charts";

// ref インターフェース
interface IIgnCategoryChartProps extends IIgrCategoryChartProps {
  categoryChartRef: LegacyRef<IgrCategoryChart>;
}
interface IIgnLegendProps extends IIgrLegendProps {
  legendRef: LegacyRef<IgrLegend>;
}

export const IgnCategoryChart = dynamic(
  async () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { 
      IgrCategoryChart, 
      IgrCategoryChartModule, 

      IgrDataChartInteractivityModule,
      IgrCategoryChartCoreModule, 
      IgrDataChartVerticalCategoryModule,
      IgrDataChartAnnotationModule,
      IgrDataChartExtendedAxesModule,
     } = await import(
      "igniteui-react-charts"
    );

    IgrCategoryChartModule.register();
    IgrDataChartInteractivityModule.register();
    IgrCategoryChartCoreModule.register();
    IgrDataChartVerticalCategoryModule.register();
    IgrDataChartAnnotationModule.register();
    IgrDataChartExtendedAxesModule.register();

    // ダイナミックインポートが完了したことを確認するためのログ
    console.log("IgrCategoryChartComponent dynamically imported.");

    // refを設定するために新しく表示用のコンポーネントを作成
    const IgnCategoryChartComponent = ({
      categoryChartRef,
      ...props
    }: IIgnCategoryChartProps) => {
      return <IgrCategoryChart ref={categoryChartRef} {...props} />;
    };

    return IgnCategoryChartComponent;
  },
  { ssr: false }
);

export const IgnLegend = dynamic(
  async () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { IgrLegend, IgrLegendModule } = await import(
      "igniteui-react-charts"
    );

    IgrLegendModule.register();

    // ダイナミックインポートが完了したことを確認するためのログ
    console.log("IgrLegendComponent dynamically imported.");
    
    // refを設定するために新しく表示用のコンポーネントを作成
    const IgnLegendComponent = ({
      legendRef,
      ...props
    }: IIgnLegendProps) => {
      return <IgrLegend ref={legendRef} {...props} />;
    };

    return IgnLegendComponent;
  },
  { ssr: false }
);
