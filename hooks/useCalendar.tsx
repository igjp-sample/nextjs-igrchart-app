import dynamic from "next/dynamic";
import React, { LegacyRef, forwardRef, PropsWithChildren } from "react";
import { 
  IgrCalendar, IIgrCalendarProps,
} from "igniteui-react";

// refを設定するためのインターフェースを定義
interface IIgnCalendarProps extends IIgrCalendarProps {
  calendarRef: LegacyRef<IgrCalendar>;
}

// forwardRefを使ってrefを設定するためのコンポーネントを作成
export const FIgrCalendar = forwardRef<any, IIgrCalendarProps>((props, ref) => {
  return <IgnCalendar calendarRef={ref} {...props}></IgnCalendar>
});

// DataChart ダイナミックインポート
export const IgnCalendar = dynamic(
  async () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { 
      IgrCalendar,
      IgrCalendarModule,
     } = await import(
      "igniteui-react"
    );

    IgrCalendarModule.register();

    // ダイナミックインポートが完了したことを確認するためのログ
    console.log("IgrCalendarComponent dynamically imported.");

    // refを設定するために新しく表示用のコンポーネントを作成
    const IgnCalendarComponent = ({
      calendarRef,
      ...props
    }: IIgnCalendarProps) => {
      return <IgrCalendar ref={calendarRef} locale="ja-JP" selection="range" {...props}></IgrCalendar>;
      // en-US アメリカ
      // ja-JP 日本
      // ko-KR 韓国
      // zh-CN 中国
    };

    return IgnCalendarComponent;
  },
  { ssr: false }
);

