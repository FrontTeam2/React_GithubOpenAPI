import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { flexAlignCenter, MarginAuto } from "../../Styles/common";
import Header from "./Header";

function Layout() {
    return (
        <S.Wrapper>
            <Header />
            <Outlet />
            <S.FooterWrap>
                <S.Footer>
                    <h3>레포지토리 이슈를 찾아라</h3>
                    <p>Front Dev & Design By Been Bin</p>
                </S.Footer>
            </S.FooterWrap>
        </S.Wrapper>
    );
}

export default Layout;

const Wrapper = styled.div`
    width: 100%;
    background: #fff;
    overflow: hidden;
`;

const FooterWrap = styled.div`
    ${flexAlignCenter}
    height: 12rem;
    background: ${({ theme }) => theme.PALETTE.gray[100]};
`;

const Footer = styled.footer`
    width: 90%;
    ${MarginAuto}
    max-width:120rem;

    & > h3 {
        margin-bottom: 0.5rem;
    }
`;

const S = {
    Wrapper,
    FooterWrap,
    Footer,
};
