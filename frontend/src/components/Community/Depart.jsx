import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { departActions } from '../../store/community/Depart';

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
    return (
      <DepartContainer>
         <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {departName}
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
          {dummyDepart.map((e,i) => (
            <MenuItem onClick={() => {departFunction(i)}} key={i}>{e.departName}</MenuItem> 
          ))}
        </Menu>
      </DepartContainer>
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
width: 100px;
height: 100px;
border: solid;
border-radius: 5px;
`;
export default DepartList