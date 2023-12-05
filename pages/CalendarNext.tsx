import React, { useState, useRef, useEffect } from "react";
import {
  FIgrCalendar,
} from "../hooks/useCalendar";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "../styles/CalendarStyling.module.css";

const DataChartNext = () => {
  const [calendarStyle, setCalendarStyle] = useState({ width: '400px' });
  const [headerVisible, setHeaderVisible] = useState(true);
  const calendarRef = useRef(null);

  useEffect(() => {
    // ここで条件に基づいてスタイルを変更
    setCalendarStyle(prevStyle => ({
      ...prevStyle,  // 既存のスタイルをコピー
      width: '600px',
    }));

    // レンダリング後に非表示にしたい要素に対してCSSクラスを追加
    setHeaderVisible(false);

    // FIgrCalendarのDOMにアクセスしてスタイルを変更
    if (calendarRef.current) {
      const headerElement = calendarRef.current.querySelector(".header");
      if (headerElement) {
        headerElement.style.setProperty("display", "none", "important");
      }
    }

  }, []);

  return (
    <div className="container sample" style={{ display: 'flex' }}>
      <FIgrCalendar ref={calendarRef} style={calendarStyle} className={`header ${headerVisible ? '' : 'hide-element'}`}/>
      <p/>
    </div>
  );
};

export default DataChartNext;
