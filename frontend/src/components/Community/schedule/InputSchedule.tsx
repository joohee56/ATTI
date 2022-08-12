import React, { useEffect, useState, useRef } from "react";
import { weekClassSchedule } from "./SchedulePageWrapper";

const InputSchedule = ({
  weekList,
  handlerInserSchedule,
}: //   weekClass,
{
  weekList: any;
  handlerInserSchedule: (element: weekClassSchedule) => void;
  //   weekClass: weekClassSchedule;
}) => {
  const time = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];
  console.log(weekList);
  const [endTime, setEndTime] = useState<string[]>(
    time.slice(weekList.timeIndex)
  );
  const [saveStartTimeIndex, setSaveStartTimeIndex] = useState<number>(
    weekList.timeIndex
  );

  const [startEndTime, setStartEndTime] = useState<any>({
    startTime: weekList.time,
    endTime: weekList.time,
  });
  const cousrseNameRef = useRef<HTMLInputElement>(null);
  const cousrseProfRef = useRef<HTMLInputElement>(null);
  const onChange = (e: any) => {
    console.log(e.target.id);
    const startTimeIndex = e.target.selectedIndex;
    const el = e.target.childNodes[startTimeIndex];
    const option = el.getAttribute("id");
    setSaveStartTimeIndex(option);
    console.log(option);
    setEndTime(time.slice(option));
    setStartEndTime({ startTime: e.target.value, endTime: e.target.value });
  };

  const endTimeChange = (e: any) => {
    setStartEndTime((prev: any) => ({
      ...prev,
      endTime: e.target.value,
    }));
  };
  const onClick = (e: any) => {
    if (
      cousrseNameRef &&
      cousrseNameRef.current &&
      cousrseProfRef &&
      cousrseProfRef.current
    ) {
      const content: weekClassSchedule = {
        cousrseId: null,
        courseName: cousrseNameRef.current.value,
        courseStartTime: startEndTime.startTime,
        courseEndTime: startEndTime.endTime,
        courseProf: cousrseProfRef.current.value,
        courseDate: weekList.weekString,
        userId: "박범수",
        weekName: weekList.weekString,
      };
      handlerInserSchedule(content);
      cousrseNameRef.current.value = "";
      cousrseProfRef.current.value = "";
    }
  };

  const monToFri = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  return (
    <div>
      <div>
        <span>
          <div>과목명</div>
          <div>
            <input id="cousrseName" ref={cousrseNameRef} />
          </div>
        </span>
      </div>
      <div>
        <span>
          <div>시작시간</div>
          <div>
            <select onChange={onChange} defaultValue={time[weekList.timeIndex]}>
              {time.map((e: string, i: number) => (
                <option value={e} key={e} id={i.toString()}>
                  {e}
                </option>
              ))}
            </select>
          </div>
        </span>
      </div>
      <div>
        <span>
          <div>종료시간</div>
          <div>
            <select
              onChange={endTimeChange}
              defaultValue={time[saveStartTimeIndex]}
            >
              {endTime.map((e) => (
                <option value={e} key={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>
        </span>
      </div>
      <div>
        <span>
          <div>교수명</div>
          <div>
            <input id="courseProf" ref={cousrseProfRef} />
          </div>
        </span>
      </div>
      <button onClick={onClick}>추가</button>
    </div>
  );
};

export default InputSchedule;
