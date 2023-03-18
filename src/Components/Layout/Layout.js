import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

function Layout() {
    return (
        <S.Wrapper>
            <Header />
            <Outlet />
        </S.Wrapper>
    );
}

export default Layout;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
    overflow: hidden;
`;

const S = {
    Wrapper,
};
