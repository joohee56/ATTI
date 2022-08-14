import React, { useEffect, useState } from "react";
import { classStudentList, studentAttendState } from "./AdminCalendarModal";
import {
  AdminAttednTableTd,
  AdminAttendTableTr,
  AdminTableTh,
  AdminTableWrapper,
  CourseNameWrapper,
} from "./adminStyle/AdminCalendarModalInputstyled";
import {
  AdminSelect,
  AdminTableHeadDiv,
} from "./adminStyle/AdminMemberTableStyle";

const dummyStudent: classStudentList[] = [
  {
    courseId: 1,
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
    courseId: 2,
    className: "Spring Boot",
    class: [
      { name: "이주희", attend: "출석" },
      { name: "이현정", attend: "출석" },
    ],
  },
  {
    courseId: 3,
    className: "React",
    class: [
      { name: "이주희", attend: "출석" },
      { name: "박범수", attend: "출석" },
      { name: "이현태", attend: "지각" },
    ],
  },
];

const AdminAttendStudentList = ({
  courseName,
  courseId,
}: {
  courseName: string;
  courseId: number;
}) => {
  const [studentList, setStudentList] = useState<studentAttendState[]>([
    {
      name: "",
      attend: "",
    },
  ]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (courseId !== 0) {
      let temp = dummyStudent.filter((e) => {
        return e.courseId === courseId;
      });
      console.log(temp[0].class);
      setStudentList(temp[0].class);
      setLoading(true);
    }
  }, [courseId]);

  return (
    <div>
      {courseName === "" ? (
        <CourseNameWrapper></CourseNameWrapper>
      ) : (
        <CourseNameWrapper>{courseName}</CourseNameWrapper>
      )}
      <AdminTableWrapper>
        <thead>
          <tr>
            <AdminTableTh widthLength={60}>
              <AdminTableHeadDiv>No.</AdminTableHeadDiv>
            </AdminTableTh>
            <AdminTableTh widthLength={150}>
              <AdminTableHeadDiv>Name</AdminTableHeadDiv>
            </AdminTableTh>
            <AdminTableTh widthLength={150}>
              <AdminTableHeadDiv>출결 변경</AdminTableHeadDiv>
            </AdminTableTh>
          </tr>
        </thead>
        {loading &&
          Object.keys(studentList).map((e: any, i: number) => (
            <tbody key={i}>
              <AdminAttendTableTr>
                <AdminAttednTableTd widthLength={60}>{i}</AdminAttednTableTd>
                <AdminAttednTableTd widthLength={150}>
                  {studentList[e].name}
                </AdminAttednTableTd>
                <td>
                  <AdminSelect>
                    <option value="출석">출석</option>
                    <option value="지각">지각</option>
                    <option value="결석">결석</option>
                  </AdminSelect>
                </td>
              </AdminAttendTableTr>
            </tbody>
          ))}
      </AdminTableWrapper>
    </div>
  );
};

export default AdminAttendStudentList;
