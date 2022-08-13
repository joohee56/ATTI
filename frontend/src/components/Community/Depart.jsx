import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { departActions } from '../../store/community/Depart';
import DepartCreate from './DepartCreate';
import DepartJoin from './DepartJoin';
import Modal from '../Modal';
import { palette } from '../../styles/palette';

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';


function DepartList(){
  
  const dispatch = useDispatch()

  const dummyDepart = [
    {
      departId: 1,
      userId: "",
      departName: "싸피",
      departCode: ""
    },
    {
      departId: 2,
      userId: "",
      departName: "대전1반",
      departCode: ""
    },
    {
      departId: 3,
      userId: "",
      departName: "대전3반",
      departCode: ""
    },
  
  ]
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    }

    function departFunction(i){
      handleClose()
      dispatch(departActions.saveDepart(
        {departId: dummyDepart[i].departId,
        userId: dummyDepart[i].userId,
        departName: dummyDepart[i].departName,
        departCode: dummyDepart[i].departCode,
       }
    ))
    }

    const departName = useSelector(state => state.depart.departName)

    const [isOpenModal4, setOpenModal4] = useState(false);
    const onClickToggleModal4 = useCallback(() => {
      setOpenModal4(!isOpenModal4);
      }, [isOpenModal4]);

    const handleModal4 = () => {
      setOpenModal4((prev) => {
        return !prev}
      );
    }
    function departCreateFunction(){
      handleClose()
      onClickToggleModal4()
    }

    const [isOpenModal5, setOpenModal5] = useState(false);
    const onClickToggleModal5 = useCallback(() => {
      setOpenModal5(!isOpenModal5);
      }, [isOpenModal5]);

    const handleModal5 = () => {
      setOpenModal5((prev) => {
        return !prev}
      );
    }
    function departJoinFunction(){
      handleClose()
      onClickToggleModal5()
    }

    return (
      <>
      <DepartContainer>
         <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <span style={{ borderRadius: "10px", width: "120px", height: "40px", fontSize: "20px", color: "white", background: palette.main_grPurple, fontWeight: "bolder"}}>
          채널선택
        </span>
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={() => {departCreateFunction()}}> <AddBoxIcon/>&nbsp; 채널생성</MenuItem>
          <MenuItem onClick={() => {departJoinFunction()}}><GroupAddIcon/>&nbsp; 채널가입</MenuItem>
         
          {dummyDepart.map((e,i) => (
            <MenuItem onClick={() => {departFunction(i)}} key={i}>{e.departName}</MenuItem> 
          ))}
        </Menu>
        <div>
          현재 채널: {departName}
        </div>
      </DepartContainer>
      {isOpenModal4 && (
        <Modal
          onClickToggleModal={onClickToggleModal4}
          width="800px"
          height="400px"
        >
          <DepartCreate handleModal4={handleModal4} />
        </Modal>
      )}
       {isOpenModal5 && (
        <Modal
          onClickToggleModal={onClickToggleModal5}
          width="800px"
          height="700px"
        >
          <DepartJoin handleModal5={handleModal5} />
        </Modal>
      )}
      </>
    )
};

// function Depart(){
//     const handleClick = (event) => {
//       setAnchorEl(event.currentTarget);
//     };
//     return(
//         <CategoryContainer>
//             <Button
//         id="fade-button"
//         aria-controls={open ? 'fade-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//       >
//         채널
//       </Button>
//            {DepartList(dummyDepart)}
//         </CategoryContainer>
        
//     );
// }

const DepartContainer = styled.div`
width: 220px;
height: 100px;
/* border: solid;
border-radius: 5px; */
margin: -100px 0 50px 0;
font-size: 20px;
font-weight: bold;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
export default DepartList