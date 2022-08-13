import React, { useEffect, useState } from "react";
import moment from "moment";
import styled from "styled-components";
import Modal from "../../Modal";
import InputSchedule from "./InputSchedule";
import {
  AddClassButton,
  ExistenceClass,
  LeftBar,
  ScheduleLi,
  ScheduleUl,
  TempDiv,
} from "./SchedulePageStyle";

export interface weekClassSchedule {
  cousrseId: string | null;
  courseName: string;
  courseProf: string;
  userId: string;
  courseStartTime: string;
  courseEndTime: string;
  courseDate: string;
  weekName: string | null | undefined;
}

const dummyClass = [
  {
    cousrseId: "1",
    courseName: "테스트",
    courseProf: "이현태",
    userId: "박범수",
    courseStartTime: "09:00",
    courseEndTime: "12:00",
    courseDate: "2022-08-12",
  },
  {
    cousrseId: "2",
    courseName: "리액트",
    courseProf: "이주희",
    userId: "박범수",
    courseStartTime: "11:00",
    courseEndTime: "13:00",
    courseDate: "2022-08-11",
  },
  {
    cousrseId: "3",
    courseName: "뷰",
    courseProf: "김연수",
    userId: "박범수",
    courseStartTime: "14:00",
    courseEndTime: "16:00",
    courseDate: "2022-08-09",
  },
];

const SchedulePage = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const LeftWrapper = styled.div`
  display: flex;
  width: 150px;
  flex-direction: column;
`;
const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const WeekStringWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const WeekString = styled.div`
  margin-left: 6%;
  margin-right: 8%;
  margin-bottom: 1%;
`;

const DayScheduleList = styled.div`
  display: flex;
  /* flex-direction: column; */
`;

const SchedulePageWrapper = () => {
  const monToFri = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const [getMoment, setMoment] = useState(() => moment());
  const [weekList, setWeekList] = useState<string[]>([]);
  const [selectDay, setSelectDay] = useState<any>();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [selectDeleteSchedule, setSeleteDeleteSchedule] = useState<any>();
  const [insertSchedule, setInsertSchedule] = useState<weekClassSchedule>({
    cousrseId: "",
    courseName: "",
    courseProf: "",
    userId: "",
    courseStartTime: "",
    courseEndTime: "",
    courseDate: "",
    weekName: undefined,
  });
  const [week, setWeek] = useState<weekClassSchedule[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [weekClassState, setWeekClassState] = useState<any>([
    {
      cousrseId: "",
      courseName: "",
      courseProf: "",
      userId: "",
      courseStartTime: "",
      courseEndTime: "",
      courseDate: "",
      weekName: undefined,
    },
  ]);

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
  const handlerInserSchedule = (element: weekClassSchedule) => {
    // startTime,endTime 년-월-일 시간:분 으로 할것 (띄어쓰기 잊기 말기)
    element.courseDate = weekList[selectDay.weekIndex];
    setInsertSchedule(element);
    let tempWeek = week;
    tempWeek?.push(element);
    let weekSchedule = weekClassState;
    setWeek(tempWeek);
    setIsOpenModal(false);
    let weekClass = tempWeek;
    for (let i = 0; i < monToFri.length; i++) {
      for (let j = 0; j < weekClass.length; j++) {
        if (weekClass[j].weekName === monToFri[i]) {
          for (let k = 0; k < time.length; k++) {
            if (time[k] === weekClass[j].courseStartTime) {
              weekSchedule[i][k] = weekClass[j];
            }
          }
        }
      }
    }
    console.log(weekSchedule);
    setWeekClassState(weekSchedule);
  };

  const deleteSchedule = (element: weekClassSchedule) => {
    let tempWeek = week;
    let weekClass = tempWeek.filter((e: weekClassSchedule) => {
      return e.cousrseId === element.cousrseId;
    });
    let weekSchedule = weekClassState;
    for (let i = 0; i < monToFri.length; i++) {
      for (let j = 0; j < weekClass.length; j++) {
        if (weekClass[j].weekName === monToFri[i]) {
          for (let k = 0; k < time.length; k++) {
            if (time[k] === weekClass[j].courseStartTime) {
              weekSchedule[i][k] = {
                ...weekSchedule[i][k],
                cousrseId: "",
                courseName: "",
                courseProf: "",
                userId: "",
                courseStartTime: "",
                courseEndTime: "",
              };
            }
          }
        }
      }
    }
    let result = tempWeek.filter((e) => {
      return e.cousrseId !== element.cousrseId;
    });
    setWeek(result);
    console.log(weekSchedule);
    setWeekClassState(weekSchedule);
    setIsOpenDeleteModal(false);
  };

  const today = getMoment;

  let daySchedule: any = new Array(10).fill({
    cousrseId: "",
    courseName: "",
    courseProf: "",
    userId: "",
    courseStartTime: "",
    courseEndTime: "",
    courseDate: "",
    weekName: undefined,
  });
  let weekSchedule: any = [];
  useEffect(() => {
    let weekClass = dummyClass.map((e) => {
      const weekName = moment(e.courseDate, "YYYY-MM-DD").format("dddd");
      let temp = { ...e, weekName };
      return temp;
    });
    monToFri.forEach((e: any) => {
      weekSchedule.push(daySchedule.slice());
    });
    for (let i = 0; i < monToFri.length; i++) {
      const startWeek = moment()
        .day(i + 1)
        .format("YYYY-MM-DD");
      for (let j = 0; j < weekClass.length; j++) {
        if (weekClass[j].weekName === monToFri[i]) {
          for (let k = 0; k < time.length; k++) {
            if (time[k] === weekClass[j].courseStartTime) {
              weekSchedule[i][k] = weekClass[j];
            }
          }
        }
      }
      let tempWeekList = weekList;
      if (tempWeekList.length < 5) {
        tempWeekList.push(startWeek);
        setWeekList(tempWeekList);
      }
    }
    console.log(weekClass);
    setWeekClassState(weekSchedule);
    setWeek(weekClass);
  }, []);
  console.log(weekList);
  function onClickAddSchedule(e: any) {
    setSelectDay({
      weekIndex: e.target.id,
      timeIndex: e.target.value,
      time: time[e.target.value],
      weekString: monToFri[e.target.id],
    });
    setIsOpenModal(true);
  }
  return (
    <SchedulePage>
      {isOpenModal && (
        <Modal
          onClickToggleModal={() => {
            setIsOpenModal(false);
          }}
        >
          <InputSchedule
            weekList={selectDay}
            week={week}
            handlerInserSchedule={handlerInserSchedule}
          />
        </Modal>
      )}
      {isOpenDeleteModal && (
        <Modal
          onClickToggleModal={() => {
            setIsOpenDeleteModal(false);
          }}
        >
          {
            <div>
              삭제하시겠습니까?
              <div>
                <div>
                  <button
                    onClick={() => {
                      deleteSchedule(selectDeleteSchedule);
                    }}
                  >
                    네
                  </button>
                  <button
                    onClick={() => {
                      setIsOpenDeleteModal(false);
                    }}
                  >
                    아니오
                  </button>
                </div>
              </div>
            </div>
          }
        </Modal>
      )}
      <LeftWrapper>
        <div>
          <TempDiv />
          {Object.keys(time).map((e: any, i) => (
            <LeftBar key={i}>{time[e]}</LeftBar>
          ))}
        </div>
      </LeftWrapper>
      <RightWrapper>
        <WeekStringWrapper>
          {Object.keys(monToFri).map((e: any, i: number) => (
            <WeekString key={i}>{monToFri[e]}</WeekString>
          ))}
        </WeekStringWrapper>
        <DayScheduleList>
          {Object.keys(weekClassState).map((e: any, i: number) => (
            <ScheduleUl key={i} index={i}>
              {weekClassState[0].courseName !== "" && (
                <div>
                  {weekClassState[e].map((el: any, index: number) => (
                    <ScheduleLi key={index}>
                      {el.courseName !== "" ? (
                        <>
                          <ExistenceClass
                            extendsHeight={
                              Number(el.courseEndTime.substring(0, 2)) -
                              Number(el.courseStartTime.substring(0, 2))
                            }
                          >
                            <div>{el.courseName}</div>
                            <div>{el.courseProf}</div>
                            <div>시작시간 : {el.courseStartTime}</div>
                            <div>끝나는 시간 : {el.courseEndTime}</div>
                            <button
                              onClick={() => {
                                setSeleteDeleteSchedule(el);
                                setIsOpenDeleteModal(true);
                              }}
                            >
                              삭제하기
                            </button>
                          </ExistenceClass>
                        </>
                      ) : (
                        <AddClassButton
                          onClick={onClickAddSchedule}
                          id={i.toString()}
                          value={index}
                        ></AddClassButton>
                      )}
                    </ScheduleLi>
                  ))}
                </div>
              )}
            </ScheduleUl>
          ))}
        </DayScheduleList>
      </RightWrapper>
    </SchedulePage>
  );
};

export default SchedulePageWrapper;
