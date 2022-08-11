import { NavLink, Route, Link } from "react-router-dom";

function Class() {
    return(
        <div>
            <span>클래스 버튼들 테스트할 예정</span>
            <button>
                <NavLink to="/classmeeting/adfsfwerwt">링크1</NavLink>
            </button>
            <button>
                <NavLink to="/classmeeting/awewerqfdsxcsfet">링크2</NavLink>
            </button>
            <button>
                <NavLink to="/classmeeting/sdsdfsewsavxcvsg">링크3</NavLink>
            </button>
        </div>
    )
}

export default Class