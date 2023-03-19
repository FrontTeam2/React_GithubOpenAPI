import { css } from "styled-components";
// css - emotion의 기능

export const ModalBackground = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const flexBetween = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const flexAlignCenter = css`
    display: flex;
    align-items: center;
`;

export const gridTemplate = css`
    display: grid;
    justify-items: center;
    align-items: center;
`;

export const gridColumnTwo = css`
    grid-template-columns: repeat(2, 1fr);
`;

export const gridColumnOne = css`
    grid-template-columns: repeat(1, 1fr);
`;

export const MarginAuto = css`
    margin: 0 auto;
`;

export const title = css`
    font-size: 48px;
    line-height: 16px;
    font-weight: bold;
`;
