import React, { useEffect, useState, useRef } from "react";
import { weekClassSchedule } from "./SchedulePageWrapper";

const InputSchedule = ({
  weekList,
  week,
  handlerInserSchedule,
}: //   weekClass,
{
  weekList: any;
  handlerInserSchedule: (element: weekClassSchedule) => void;
  week: weekClassSchedule[];
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
  console.log(week);

  const [endTime, setEndTime] = useState<string[]>(
    time.slice(weekList.timeIndex)
  );
  const [saveStartTimeIndex, setSaveStartTimeIndex] = useState<number>(
    weekList.timeIndex
  );
  const [checkClass, setCheckClass] = useState(false);
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
        courseId: null,
        courseName: cousrseNameRef.current.value,
        courseStartTime: startEndTime.startTime,
        courseEndTime: startEndTime.endTime,
        courseProf: cousrseProfRef.current.value,
        courseDate: weekList.weekString,
        userId: "박범수",
        weekName: weekList.weekString,
      };
      let flag = false;
      for (let i = 0; i < week.length; i++) {
        console.log(week[i]);
        if (week[i].weekName === content.weekName) {
          const weekStartTime = Number(week[i].courseStartTime.slice(0, 2));
          const contentStartTime = Number(content.courseStartTime.slice(0, 2));
          const weekEndTime = Number(week[i].courseEndTime.slice(0, 2));
          const contentEndTime = Number(content.courseEndTime.slice(0, 2));
          for (let j = weekStartTime; j < weekEndTime; j++) {
            for (let k = contentStartTime; k < contentEndTime; k++) {
              if (k === j || k === j) {
                flag = true;
                setCheckClass(true);
                break;
              }
            }
            if (flag) {
              break;
            }
          }
        }
      }
      console.log(flag);
      if (!flag) {
        handlerInserSchedule(content);
        cousrseNameRef.current.value = "";
        cousrseProfRef.current.value = "";
      } else {
        return;
      }
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
      {checkClass && <div>같은 시간에 수업이 있습니다.</div>}
      <button onClick={onClick}>추가</button>
    </div>
  );
};

export default InputSchedule;
