import React, { useCallback, useState } from "react";
import moment from "moment";
import styled from "styled-components";

const CalTableHead = styled.table`
  width: 85%;
  height: 60vh;
`;
const CalTableBody = styled.tbody`
  width: 100%;
  height: 60vh;
`;

const CalTableTR = styled.tr`
  width: 100%;
`;

const AdminPageAttendCalendar = ({ handlerModal, handlerPickDay }) => {
  const [getMoment, setMoment] = useState(() => moment());

  const today = getMoment;
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

  const calendarArr = ({ handlerModal, handlerPickDay }) => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result.push(
        <CalTableTR key={week}>
          {Array(7)
            .fill(0)
            // eslint-disable-next-line no-loop-func
            .map((data, index) => {
              let days = today
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(index, "day"); //d로해도되지만 직관성

              if (days.format("MM") !== today.format("MM")) {
                return (
                  <td key={index} style={{ backgroundColor: "gray" }}>
                    <span>{days.format("D")}</span>
                  </td>
                );
              } else {
                return (
                  <td
                    key={index}
                    onClick={() => {
                      console.log(days.format());
                      handlerPickDay(days.format());
                      handlerModal();
                    }}
                  >
                    <span>{days.format("D")}</span>
                    {Number(days.format("D")) <= Number(today.format("D")) && (
                      <button>안녕하세요</button>
                    )}
                  </td>
                );
              }
            })}
        </CalTableTR>
      );
    }
    return result;
  };

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setMoment(getMoment.clone().subtract(1, "month"));
          }}
        >
          이전달
        </button>
        <span>{today.format("YYYY 년 MM 월")}</span>
        <button
          onClick={() => {
            setMoment(getMoment.clone().add(1, "month"));
          }}
        >
          다음달
        </button>
      </div>
      <CalTableHead>
        <thead>
          <tr>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
        </thead>
        <CalTableBody>
          {calendarArr({ handlerModal, handlerPickDay })}
        </CalTableBody>
      </CalTableHead>
    </div>
  );
};

export default AdminPageAttendCalendar;
