import styled from "styled-components";
import { flexAlignCenter, MarginAuto } from "../../Styles/common";
import { useDispatch, useSelector } from "react-redux";

function Header() {
    return (
        <S.HeaderBar>
            <a href="/">
                <img
                    src={`${process.env.PUBLIC_URL}/github.png`}
                    alt="github_logo"
                />
            </a>
            <div>
                <h1>REPOSITORY</h1>
                <p>WELCOME TO HELL</p>
            </div>
        </S.HeaderBar>
    );
}

export default Header;

const HeaderBar = styled.header`
    width: 95%;
    height: 10rem;
    ${MarginAuto}
    max-width:120rem;
    ${flexAlignCenter}

    & > a > img {
        margin-right: 1rem;
        width: 5rem;
        border-radius: 1rem;
        box-sizing: border-box;
    }

    & > div > h1 {
        margin-bottom: 0.5rem;
    }
`;

const S = {
    HeaderBar,
};
