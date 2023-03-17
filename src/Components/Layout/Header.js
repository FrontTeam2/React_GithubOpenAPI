import styled from "styled-components";
import { flexAlignCenter, MarginAuto } from "../../Styles/common";

function Header() {
    return (
        <S.HeaderBar>
            <img
                src={`${process.env.PUBLIC_URL}/github.png`}
                alt="github_logo"
            />
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

    & > img {
        margin-right: 1rem;
        width: 5rem;
    }
`;

const S = {
    HeaderBar,
};
