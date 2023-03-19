import styled from "styled-components";
import {
    gridColumnOne,
    gridColumnTwo,
    gridTemplate,
} from "../../Styles/common";

function DetailPage() {
    return (
        <S.DetailContainer>
            <S.DetailLeft>
                <>dsfsd</>
            </S.DetailLeft>
            <S.DetailRight>
                <>dkfjdlkfjs</>
            </S.DetailRight>
        </S.DetailContainer>
    );
}

export default DetailPage;

const DetailContainer = styled.div`
    ${gridTemplate}
    ${gridColumnTwo}

    @media screen and (max-width:768px) {
        ${gridColumnOne}
    }
`;

const DetailLeft = styled.div``;

const DetailRight = styled.div``;

const S = {
    DetailContainer,
    DetailLeft,
    DetailRight,
};
