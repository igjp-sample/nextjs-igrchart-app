import React, { useState, useRef, useEffect } from "react";
import { FIgrCalendar } from "../hooks/useCalendar";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "../styles/CalendarStyling.module.css";

const DataChartNext = () => {
  const [calendarStyle, setCalendarStyle] = useState({ width: '400px' });
  const calendarRef = useRef(null);

  // Label名と一致するデータを設定
  const sampleData = [
    '2023年12月14日木曜日',
    '2023年12月20日水曜日',
  ];

  useEffect(() => {
    // FIgrCalendar コンポーネントがロードされるまで待機
    const fetchData = async () => {
      const { FIgrCalendar: DynamicFIgrCalendar } = await import("../hooks/useCalendar");

      // FIgrCalendar コンポーネントのスタイルを変更
      setCalendarStyle(prevStyle => ({
        ...prevStyle,
        width: '600px', // 横幅 600px
        '--ig-font-family': 'MS Serif, sans-serif', // MS明朝 フォント
        '--ig-h4-font-size': '40px', // Start - End のフォントサイズ
        '--ig-subtitle-1-font-size': '25px', // 日付のフォントサイズ
        backgroundColor: '#336699', // 背景色
        color: 'red', // 「年月選択時」のフォント色
      }));

      // レンダリング後にサンプルデータに含まれる日付に対して強調表示のスタイルを適用
      if (calendarRef.current) {
        const calendarInstance = calendarRef.current.calendarRef.current;
        if (calendarInstance) {
          // ビューが変更されたらスタイルを適用
          calendarInstance.onViewChange = () => {
            sampleData.forEach(label => {
              // 日付に対応するセルを取得
              const cellElement = calendarInstance.calendarElement.querySelector(`[aria-label="${label}"]`);
              if (cellElement) {
                // スタイルを適用
                cellElement.style.cssText = `
                  ${cellElement.style.cssText};
                  background: yellow;
                `;
              }
            });
          };
        }
      }
    };

    fetchData();
  }, [calendarRef]);

  return (
    <div className="container sample" style={{ display: 'flex' }}>
      <FIgrCalendar ref={calendarRef} style={calendarStyle} />
      <p />
    </div>
  );
};

export default DataChartNext;
