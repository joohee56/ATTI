import React, {PropsWithChildren, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavLink, Route, Link } from "react-router-dom";
import styled from 'styled-components';

import apiAcc, {api} from '../../utils/api';
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

    const categoryLists = useSelector(state => state.category.categoryList)
    const { id } = useSelector(state => state.userInfo);
    const dispatch = useDispatch()

    const departId = useSelector(state => state.depart.departId)
    const currentCider = useSelector(state => state.reRendering.cider)
    const updateCider = !currentCider

    const [category, setCategory] = useState([])
    const [changeCss, setChangeCss] = useState(1);
    const [changeResult, setChangeResult] = useState(false);
    const [newCategory, setNewCategory] = useState(false)
    console.log("카테고리리스트: ", categoryList)

    function getChangeCss(){
        setChangeCss(0)
    }

    useEffect(() => {
        if (categoryList !== null && categoryList.length > 0 && categoryList !== undefined) {
            
            setCategory(categoryList);
        }
    },[categoryList])
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
            zIndex: "10",
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
        // console.log("changeState는?", changeState);
        useEffect(() => {
            if (changeResult) {
                console.log("찬기")
                console.log(category);
                // updateCategory()
                CategoryFunction(0)
                setChangeResult(false);
            }
            
        },[changeState,changeResult])
        
        const adminPage = useSelector(state => state.reRendering.setAdminPage)
        const myPage = useSelector(state => state.reRendering.setMyPage)
        const getAdminPage = (i) => {
            return false
        }
        const getMyPage = (j) => {
            return false
        }
        const dispatch = useDispatch()
        function classFunction(){
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
        
      
        function CategoryFunction(i) {
            console.log("카테고리이이이이이: ", category)
            classFunction()
            setChangeCss(i+1)
            dispatch(categoryActions.saveCategory(
                {categoryId: category[i].categoryId,
                categoryAnoInfo: category[i].categoryAnoInfo,
                categoryComAnoInfo: category[i].categoryComAnoInfo,
                categoryComInfo: category[i].categoryComInfo,
                categoryName: category[i].categoryName,
                cType: category[i].ctype,
                userId: category[i].userId}
            ))
            dispatch(reRenderingActions.saveSetMyPage(
                {
                    setMyPage: false
                }
            ))
            
            console.log("마이페이지", myPage)
            dispatch(reRenderingActions.saveSetAdminPage(
                {
                    setAdminPage: false
                }
            ))
            
            console.log("어드민페이지", adminPage)
        }
        // 카테고리 삭제
        const deleteCategory = (categoryId) => {

            api.delete(`/admin/category/delete/${categoryId}`,
            )
            .then((res) => {
                console.log("response:", res);
                dispatch(reRenderingActions.saveReRendering(
                    {cider: updateCider }
                ))
                let newCategory = category.slice()
                for(let i = 0; i < newCategory.length; i++) {
                    if(newCategory[i].categoryId === categoryId)  {
                      newCategory.splice(i, 1);
                      i--;
                    }
                  }
                console.log("카테고리는?", newCategory);
                // console.log("결과는?", tempCategoryList);
                dispatch(categoryActions.saveCategoryList({
                    categoryList: newCategory,
                }))
            });
        }
        const result = [];
        const buttonList = [<CampaignIcon/>, <ContactSupportOutlinedIcon/>,<FolderOutlinedIcon/>,<ArticleOutlinedIcon/>, <VideocamOutlinedIcon/>, <span/>, <span/>, <span/>, <span/>, <span/>, <span/> ]
        for (let i = 0; i < category.length; i++) {
          result.push(
                <>  
                    <StyledLink to={`/community/` + departId + `/` + category[i].categoryId} onClick={() => { CategoryFunction(i)}}>
                        <div id ="1" key={i} style={changeCss === i+1 ? clickStyle : noClickStyle}>
                            <div id="2" style={changeCss === i+1 ? null : purpleBar }></div>
                            <div id="3" style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "0 0 0 30px"}}>
                                {buttonList[i]}
                                &nbsp; 
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "space-between", width: "120px"}}>
                                    {category[i].categoryName}
                                </div>
                            </div>
                        </div>
                        {i > 4 && (
                            <CloseIcon onClick={() => {deleteCategory(category[i].categoryId)}} style={{zIndex: "1", position: "relative", left: "135px", bottom: "45px"}}/> 
                        )}
                    </StyledLink>
            </>
            
          );
        }
        return result;
      };
    
    return Rendering(changeState,changeResult,setChangeResult);
    }

function Category({changeState}){
    console.log("카테고리의 찬기",changeState)
    const departId = useSelector(state => state.depart.departId)
    const [changeCss2, setChangeCss2] = useState(1);
    const noClickStyle2 = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: "white",
        width: "180px",
        height: "70px",
        margin: "15px 0px 0px 0px",
        // boxShadow: "2px 2px 2px 2px grey"
        
    }
    const clickStyle2 = {
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
        return true
      }
    const getMyPage = (j) => {
        return false
    }
    const dispatch = useDispatch()
    function adminPageFunction(){
        setChangeCss2(9999)
        // setChangeCss(0)
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
        dispatch(categoryActions.saveCType(
            {
                cType: ""
            }
        ))

    }
 
    const {id} = useSelector(state => state.userInfo)
    const departUserId = useSelector(state => state.category.userId)
    return(
        <>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end", width: "210px", height: "700px"}}>
                {CategoryList(changeState)}
                {console.log("departUserId", departUserId)}
                {console.log("id", id)}
                { departUserId === id && (
                    <div style={{position: "absolute", top: "750px"}}>
                        <StyledLink to={`/community/`+ departId + `/관리자페이지`} onClick={() => { adminPageFunction()}}>
                            <div style={noClickStyle2}>
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
    /* width: "165px";
    height: "60px"; */
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