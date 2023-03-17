import styled from "styled-components";
import { flexAlignCenter, flexCenter, MarginAuto } from "../../Styles/common";

function HomePageStyling() {
    return (
        <S.HomeStyling>
            <h3>실시간 업데이트 이슈조회</h3>
            <p>최근 이슈부터 오래된 이슈까지 한 번에 조회해보세요.</p>
        </S.HomeStyling>
    );
}

export default HomePageStyling;

const HomeStyling = styled.div`
    max-width: 120rem;
    ${flexCenter};
    flex-direction: column;
    ${MarginAuto}
    height: 48rem;

    & > h3 {
        font-size: 7.2rem;
        margin-bottom: 2rem;
    }

    & > p {
        font-size: ${({ theme }) => theme.FONT_SIZE.large};
    }

    @media screen and (max-width: 1200px) {
        & > h3 {
            font-size: 3.2rem;
            margin-bottom: 1rem;
        }

        & > p {
            font-size: ${({ theme }) => theme.FONT_SIZE.small};
        }
    }
`;

const S = {
    HomeStyling,
};
