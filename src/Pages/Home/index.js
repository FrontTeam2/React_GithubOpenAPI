import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../Styles/common";
import HomePageStyling from "./Styling";

function HomePage() {
    const inputChange = (e) => {
        return e.target.value;
    };

    return (
        <S.HomeContainer>
            <div>
                <div>
                    <img
                        src={`${process.env.PUBLIC_URL}/search_wh.png`}
                        alt=""
                    />
                    <h2>이슈를 조회하세요.</h2>
                </div>

                <input
                    type="text"
                    placeholder="링크를 붙여보세요."
                    onChange={inputChange}
                ></input>
            </div>

            <HomePageStyling />
        </S.HomeContainer>
    );
}

export default HomePage;

const HomeContainer = styled.div`
    & > div:first-child {
        ${flexCenter}
        flex-direction: column;
        width: 100%;
        height: 48rem;
        background: ${({ theme }) => theme.PALETTE.black};
        color: ${({ theme }) => theme.PALETTE.white};
    }
    & > div:first-child > h2 {
        margin-bottom: 2rem;
    }

    & > div:first-child > div {
        ${flexCenter}
        margin-bottom:2rem;
    }

    & > div:first-child > div > img {
        width: 3.2rem;
        margin-right: 1rem;
    }

    & > div:first-child > input {
        width: 32rem;
        height: 4rem;
        box-sizing: border-box;
        font-size: ${({ theme }) => theme.FONT_SIZE.medium};
        color: #aaa;
        text-align: center;
        border-radius: 2rem;
        border: 0.1rem solid #aaa;
        text-indent: 1.4rem;
    }
`;

const S = {
    HomeContainer,
};
