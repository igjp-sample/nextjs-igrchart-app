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

  // 【検証】ヘッダーをdisplay: none; として、左側に表示されるカレンダーの幅を広げる
  //   <div part="header">　←　この要素に対して display: none; を反映することでヘッダーを非表示にしたい
  //     <h5 part="header-title">
  //     <slot name="title">Select range</slot>
  //   </h5>
  //   <h2 part="header-date"><span>12月12日</span>
  //   <span> - </span>
  //   <span>12月21日</span></h2>
  //   </div>
  useEffect(() => {
    // width が600pxで反映されることは確認済み
    setCalendarStyle(prevStyle => ({
      ...prevStyle,
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
  // 【検証結果1】with: 600px; は反映されるが、headerに対してdisplay: none; は反映されない
  // 【検証結果2】important を付与しても反映されない（Reactに合わない）

  return (
    <div className="container sample" style={{ display: 'flex' }}>
      {/* ここにカレンダーヘッダー部分のみを新たに表示したい */}
      <FIgrCalendar ref={calendarRef} style={calendarStyle} className={`header ${headerVisible ? '' : 'hide-element'}`}/>
      <p/>
    </div>
  );
};

export default DataChartNext;
