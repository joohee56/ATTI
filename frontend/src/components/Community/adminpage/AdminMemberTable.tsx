import React from "react";
import styled from "styled-components";
import { memberInterface } from "./AdminMember";

const Table = styled.table`
  width: 100%;
  height: 100%;
`;

const AdminMemberTable = ({
  memberData,
  handlerSetMemberData,
}: {
  memberData: memberInterface[];
  handlerSetMemberData: ({
    index,
    role,
  }: {
    index: number;
    role: string;
  }) => void;
}) => {
  const onChange = (e: any) => {
    handlerSetMemberData({ index: e.target.name, role: e.target.value });
  };
  return (
    <Table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Team</th>
          <th>Name</th>
          <th>Email</th>
          <th>Birth</th>
          <th>출석률</th>
          <th>on/off</th>
          <th>역할</th>
        </tr>
      </thead>
      <tbody>
        {memberData.map((e, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{e.Team}</td>
            <td>{e.Name}</td>
            <td>{e.Email}</td>
            <td>{e.Birth}</td>
            <td>{e.출석률}</td>
            <td>{e.on}</td>
            <td>
              <select
                key={e.역할}
                defaultValue={e.역할}
                name={i.toString()}
                onChange={onChange}
              >
                <option value="관리자">관리자</option>
                <option value="학생">학생</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AdminMemberTable;
