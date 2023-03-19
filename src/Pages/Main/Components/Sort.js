import styled from "styled-components";
import {
    gridTemplate,
    gridColumnTwo,
    MarginAuto,
} from "../../../Styles/common";

function SortFilter() {
    return (
        <S.SortContainer>
            <S.SortBoxAZ>
                <option>생성순</option>
                <option>업데이트순</option>
                <option>최근순</option>
            </S.SortBoxAZ>
            <S.SortBoxNumber>
                <option>10개씩 보기</option>
                <option>30개씩 보기</option>
                <option>50개씩 보기</option>
            </S.SortBoxNumber>
        </S.SortContainer>
    );
}

export default SortFilter;

const SortContainer = styled.div`
    width: 95%;
    ${gridTemplate}
    ${gridColumnTwo}
    column-gap: 1rem;
    ${MarginAuto}
    max-width: 120rem;
    margin-bottom: 1rem;

    & > select {
        display: block;
        border-radius: 1rem;
        width: 100%;
        height: 4rem;
    }
`;

const SortBoxAZ = styled.select``;

const SortBoxNumber = styled.select``;

const S = {
    SortContainer,
    SortBoxAZ,
    SortBoxNumber,
};
