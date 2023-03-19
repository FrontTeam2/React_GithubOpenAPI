import styled from "styled-components";
import { flexCenter } from "../Styles/common";

function LoadingPage() {
    return (
        <S.LoadingBox>
            <S.LoadingAnimation></S.LoadingAnimation>
            <p>로딩중입니다...</p>
        </S.LoadingBox>
    );
}

export default LoadingPage;

const LoadingBox = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    ${flexCenter}
    flex-direction: column;
    background: ${({ theme }) => theme.PALETTE.white};
`;

const LoadingAnimation = styled.div`
    width: 4rem;
    height: 4rem;
    border: 0.3rem solid transparent;
    border-radius: 2rem;
    border: 0.5rem solid transparent;
    background: linear-gradient(0deg, red, black) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    margin-bottom: 2rem;
    animation: loading 1s normal infinite;

    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const S = {
    LoadingBox,
    LoadingAnimation,
};
