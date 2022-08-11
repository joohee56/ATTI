import React, { useEffect, useState } from "react";
import AdminPageAttendCalendar from "./Calendar";
import Modal from "../../Modal";
import AdminCalendarModal from "./AdminCalendarModal";

const dummyClass = ["운영체제", "Spring Boot", "Java script", "React", "Vue"];

const dummyStudent = [
  {
    className: "운영체제",
    class: [
      { name: "박범수", attend: "출석" },
      { name: "이현태", attend: "지각" },
      { name: "이주희", attend: "출석" },
      { name: "김연수", attend: "출석" },
      { name: "이현정", attend: "출석" },
    ],
  },
  {
    className: "Spring Boot",
    class: [
      { name: "이주희", attend: "출석" },
      { name: "이현정", attend: "출석" },
    ],
  },
  {
    className: "Java script",
    class: [
      { name: "이주희", attend: "출석" },
      { name: "박범수", attend: "출석" },
      { name: "이현태", attend: "지각" },
    ],
  },
  {
    className: "React",
    class: [
      { name: "이현태", attend: "지각" },
      { name: "이주희", attend: "출석" },
      { name: "이현정", attend: "출석" },
    ],
  },
  {
    className: "Vue",
    class: [
      { name: "김연수", attend: "출석" },
      { name: "박범수", attend: "출석" },
      { name: "이주희", attend: "출석" },
      { name: "이현정", attend: "출석" },
    ],
  },
];

function AdminAttendance() {
  const [pickDay, setPickDay] = useState<string>("");
  const [classList, setSelectClass] = useState<string[] | undefined>(undefined);
  const [studentList, setStudentList] = useState<any>();
  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    setSelectClass(dummyClass);
  }, []);
  const handlerSelectClass = (element: string) => {
    const temp = dummyStudent.filter((e) => {
      return e.className === element;
    });
    setStudentList(temp[0]);
  };
  const handlerModal = () => {
    setIsOpenModal((prev) => {
      return !prev;
    });
  };
  const changeAttend = (name: string, attend: string) => {
    let temp = studentList.class.map((e: any) => {
      if (e.name === name) {
        e.attend = attend;
      }
      return e;
    });
    console.log(temp);
    setStudentList((prev: any) => ({
      ...prev,
      class: temp,
    }));
  };
  const handlerPickDay = (element: string) => {
    setPickDay(element);
  };
  return (
    <div>
      {isOpenModal && (
        <Modal
          onClickToggleModal={() => {
            setIsOpenModal(false);
          }}
        >
          <div>
            <div>{pickDay}</div>
            <div>
              <AdminCalendarModal
                changeAttend={changeAttend}
                studentList={studentList}
                classList={classList}
                handlerSelectClass={handlerSelectClass}
              />
            </div>
          </div>
        </Modal>
      )}
      <AdminPageAttendCalendar
        handlerPickDay={handlerPickDay}
        handlerModal={handlerModal}
      />
    </div>
  );
}

export default AdminAttendance;
