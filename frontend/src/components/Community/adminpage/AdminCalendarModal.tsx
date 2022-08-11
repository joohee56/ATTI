import React, { useEffect, useState } from "react";

const AdminCalendarModal = ({
  classList,
  studentList,
  changeAttend,
  handlerSelectClass,
}: any) => {
  console.log(studentList);
  const [student, setStudent] = useState<any>(undefined);
  const onClick = (e: any) => {
    console.log(e);
    handlerSelectClass(e.target.id);
  };
  const onChange = (e: any) => {
    console.log(e);
    changeAttend(e.target.name, e.target.value);
  };
  //   useEffect(() => {
  //     if (studentList !== undefined) {
  //       console.log(studentList[0].class);
  //       setStudent(studentList[0].class);
  //     }
  //   }, [studentList]);
  return (
    <div>
      <div>
        {Object.keys(classList).map((e: string, i: number) => (
          <div key={i}>
            <button onClick={onClick} id={classList[e]}>
              {classList[e]}
            </button>
          </div>
        ))}
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>출결 변경</th>
            </tr>
          </thead>
          <tbody>
            {studentList !== undefined
              ? studentList.class.map((e: any, i: number) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e.name}</td>
                    <td>
                      <select
                        key={e.attend}
                        defaultValue={e.attend}
                        name={e.name}
                        onChange={onChange}
                      >
                        <option value="출석">출석</option>
                        <option value="지각">지각</option>
                        <option value="결석">결석</option>
                      </select>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCalendarModal;
