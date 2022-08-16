import React, {PropsWithChildren, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavLink, Route, Link } from "react-router-dom";
import styled from 'styled-components';

import { categoryActions } from '../../store/community/Category';
import CategoryCreate from './CategoryCreate';
import Modal from '../Modal';
import CampaignIcon from '@mui/icons-material/Campaign';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';

import { palette } from "../../styles/palette";
import { SosOutlined } from '@mui/icons-material';
import { reRenderingActions } from '../../store/community/ReRendering';


function CategoryList(changeState){
    
    const  categoryList  = useSelector(state => state.category.categoryList );
    console.log("카테고리리스트: ", categoryList)
    const categoryLists = useSelector(state => state.category.categoryList)
    const { id } = useSelector(state => state.userInfo);
    const dispatch = useDispatch()
    const departId = useSelector(state => state.depart.departId)
    const currentCider = useSelector(state => state.reRendering.cider)

    const [category, setCategory] = useState([])
    
    const [changeCss, setChangeCss] = useState(1);

    const [changeResult, setChangeResult] = useState(false);
   

    useEffect(() => {
        setCategory(categoryList);
    },[])
    useEffect(() => {
        setCategory(categoryLists)
        setChangeResult(true);
    }, [currentCider])


    const Rendering = (changeState, changeResult,setChangeResult) => {
        const noClickStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            backgroundColor: "white",
            width: "180px",
            height: "60px",
            margin: "15px -20px 0px 0px",
            boxShadow: "3px 3px 3px grey",
            // border: "1px solid",
            // zIndex: "10",
        }
        const clickStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            backgroundColor: "white",
            borderRadius: "10px 15px 15px 10px",
            width: "200px",
            height: "100px",
            margin: "10px -20px 0px 0px",
            boxShadow: "3px 3px 3px grey",
            color: palette.blue_3,
           
        }
        const purpleBar = {
            width: "15px",
            height: "60px",
            position: 'absolute',
            backgroundColor: palette.purlue_2,
           
        }
        console.log("changeState는?", changeState);
        useEffect(() => {
            if (changeResult) {
                console.log("찬기")
                console.log(category);
                CategoryFunction(0)
                setChangeResult(false);
            }
            
        },[changeState,changeResult])
        function CategoryFunction(i) {
            
            setChangeCss(i+1)
            dispatch(categoryActions.saveCategory(
                {categoryId: category[i].categoryId,
                categoryAnoInfo: category[i].categoryAnoInfo,
                categoryComAnoInfo: category[i].categoryComAnoInfo,
                categoryComInfo: category[i].categoryComInfo,
                categoryName: category[i].categoryName,
                cType: category[i].cType,
                userId: id}
            ))
            dispatch(reRenderingActions.saveSetMyPage(
                {
                    setMyPage: false
                }
            ))
            dispatch(reRenderingActions.saveSetAdminPage(
                {
                    setAdminPage: false
                }
            ))
        }
        const result = [];
        const buttonList = [<CampaignIcon/>, <ContactSupportOutlinedIcon/>,<ArticleOutlinedIcon/>, <VideocamOutlinedIcon/>, <span/>, <span/>, <span/>, <span/>, <span/>, <span/> ]
        for (let i = 0; i < category.length; i++) {
          result.push(
                <>  
                    <StyledLink to={`/community/` + departId + `/` + category[i].categoryId} onClick={() => { CategoryFunction(i)}}>
                        <div key={i} style={changeCss === i+1 ? clickStyle : noClickStyle}>
                            <CloseIcon style={{zIndex: "1", margin: "0 10px 10px 0"}}/>
                            <div style={changeCss === i+1 ? null : purpleBar }></div>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "0 0 0 30px"}}>
                                {buttonList[i]}
                                &nbsp; 
                                {category[i].categoryName}
                                 
                            </div>
                        </div>
                    </StyledLink>
            </>
            
          );
        }
        return result;
      };
    
    return Rendering(changeState,changeResult,setChangeResult);
    }

function Category({changeState }){
    console.log("카테고리의 찬기",changeState)
    const departId = useSelector(state => state.depart.departId)
    const [changeCss, setChangeCss] = useState(1);
    const noClickStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: "white",
        width: "180px",
        height: "70px",
        margin: "15px 0px 0px 0px",
        boxShadow: "2px 2px 2px 2px grey"
        
    }
    const clickStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: "white",
        borderRadius: "10px 15px 15px 10px",
        width: "200px",
        height: "110px",
        margin: "15px 0px 0px 0px",
        boxShadow: "3px 3px 3px grey",
        color: palette.blue_3,
       
    }
    const Bar = {
        width: "15px",
        height: "70px",
        position: 'absolute',
        // background: palette.grRed,
        backgroundColor: palette.gray_3,
        display: "flex", 
        justifyContent: "center",
        alignItems: "center"
    }

    const [isOpenModal6, setOpenModal6] = useState(false);
    const onClickToggleModal6 = useCallback(() => {
      setOpenModal6(!isOpenModal6);
      }, [isOpenModal6]);

    const handleModal6 = () => {
      setOpenModal6((prev) => {
        return !prev}
      );
    }
    const adminPage = useSelector(state => state.reRendering.setAdminPage)
    const myPage = useSelector(state => state.reRendering.setMyPage)
    const getAdminPage = (i) => {
        return !i
      }
    const getMyPage = (j) => {
        return false
    }
    const dispatch = useDispatch()
    function adminPageFunction(){
        setChangeCss(9999)
        dispatch(reRenderingActions.saveSetAdminPage(
            {
                setAdminPage: getAdminPage(adminPage)
            }
        ))
        dispatch(reRenderingActions.saveSetMyPage(
            {
                setMyPage : getMyPage(myPage)
            }
        ))

    }
    const {admin} = useSelector(state => state.userInfo)
    return(
        <>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end", width: "210px", height: "700px"}}>
                {CategoryList(changeState)}
                
                {admin && (
                    <div style={{position: "absolute", bottom: "50px"}}>
                        <StyledLink to={`/community/`+ departId + `/관리자페이지`} onClick={() => { adminPageFunction()}}>
                            <div style={noClickStyle}>
                                <div style={ Bar }></div>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "0 0 0 30px"}}>
                                    <DateRangeOutlinedIcon/>
                                    &nbsp;
                                    관리자페이지
                                </div>
                            </div>
                        </StyledLink>
                        <div style={{backgroundColor: "white", width: "180px", height: "70px", margin: "15px 0 0 0", opacity: "0.6", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}} onClick={() => {handleModal6()}}>
                            <div style={Bar}><PlayArrowIcon/></div>
                            <AddCategoryDiv>카테고리 추가</AddCategoryDiv>
                        </div>
                    </div>
                    )}
                    </div>
            {isOpenModal6 && (
                <Modal
                onClickToggleModal={onClickToggleModal6}
                width="1000px"
                height="800px"
                >
                <CategoryCreate handleModal6={handleModal6} />
                </Modal>
            )}
        </>
    );
}


const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: medium;
    &:focus, &:visited {
        text-decoration: none;
    }
    &:link {
        transition : 0.5s;
        text-decoration: none;
      }
      &:hover {
        color: ${palette.blue_2};
      }
`;

const AddCategoryDiv = styled.div`
    margin: 0 0 0 45px;
    font-weight: bold;
    font-size: 17px;
    &:hover{
    cursor: pointer;
    transition : 0.5s;
    color: ${palette.purlue_4};
    }
`

export default Category