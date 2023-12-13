import React, { useState, useRef, useEffect } from "react";
import { FIgrCalendar } from "../hooks/useCalendar";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "../styles/CalendarStyling.module.css";
import { IgrCalendar } from "igniteui-react";

const DataChartNext = () => {
  const [calendarStyle, setCalendarStyle] = useState({ width: '400px' });
  const calendarRef = useRef<IgrCalendar>(null);

  // refを設定するための関数
  const onCalendarRef = (calendar: IgrCalendar) => {
    if (!calendar) { return; }
    calendarRef.current = calendar;
  };

  // aria-label の名称と一致するデータを作成
  const sampleData = [
    '2023年12月5日火曜日',
    '2023年12月14日木曜日',
    '2023年12月20日水曜日',
    '2023年12月25日月曜日',
  ];

  // スタイルを適用する関数
  const applyStylesAfterRendering = () => {
    console.log("current",calendarRef.current);
    if (calendarRef.current) {
      // ShadowRoot DOMの階層を考慮して取得する
      const igcCalendar = document.querySelector('igc-calendar');
      const igcDaysView = document.querySelector('igc-calendar').shadowRoot.querySelector('igc-days-view');
      const ariaLabel = document.querySelector('igc-calendar').shadowRoot.querySelector('igc-days-view').shadowRoot.querySelector(`[aria-label="2023年12月14日木曜日"]`);
      console.log("igcCalendar",igcCalendar);
      console.log("igcDaysView",igcDaysView);
      console.log("ariaLabel",ariaLabel);

      // スタイルを適用
      sampleData.forEach(label => {
        // 日付に対応するセルを取得
        const target = document.querySelector('igc-calendar').shadowRoot.querySelector('igc-days-view').shadowRoot.querySelector(`[aria-label="${label}"]`);
        if (target) {
          console.log("HIT!",target);
          // スタイルを適用
          target.style.cssText = `
            ${target.style.cssText};
            background: yellow;
          `;
        }
      });
    }
  };

  // ViewDataボタンがクリックされたときの処理
  const onViewDataButtonClick = () => {
    console.log("ViewDataボタンがクリックされました。");
    // スタイルを適用
    applyStylesAfterRendering();
  };

  useEffect(() => {
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
      applyStylesAfterRendering();
    };

    fetchData();
  }, []);

  return (
    <div className="container sample">
      <FIgrCalendar ref={onCalendarRef} style={calendarStyle} />
      <p />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "10px" }}>
        {/* 日付データ表示ボタン */}
        <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
          <div style={{ width: "10em", fontWeight: "bold", marginRight: "1em" }}>別の日付データ表示</div>
            <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
              <button onClick={onViewDataButtonClick}>ViewData</button>
            </div>
        </div>
      </div>

    </div>
  );
};

export default DataChartNext;
