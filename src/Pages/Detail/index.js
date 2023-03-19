import styled from "styled-components";
import { flexBetween, flexCenter, MarginAuto } from "../../Styles/common";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingPage from "../../Components/Loading";
import { getIssues } from "../../Store/issues";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

function DetailPage() {
    /**
     * 도은님은 초기 데이터를 담는 변수를 다르게 설정하여
     * 데이터를 받아왔음
     */
    const issueElement = useLocation();
    const dispatch = useDispatch();
    const { title, number, body, commentsLen, userName, updatedAt } =
        issueElement?.state;
    const { owner, repository, page, sort, per_page } = useParams();

    const issues = useSelector((store) => store.issue.issues);
    console.log(issues);
    const getIssueState = useSelector((store) => store.issue.getIssuesState);

    const getData = useCallback(() => {
        dispatch(
            getIssues({ owner, repository, params: { page, sort, per_page } })
        );
    }, [page, sort, per_page]);

    useEffect(() => {
        getData();
    }, [getData]);

    /**
     * 초기 데이터가 여러 곳에서 이용되도록 서버 데이터를 호출하는 변수를 여러개 설정해야하는 듯
     * useLocation을 사용하면 state값으로 전달받은 키값을 활용 가능하나
     * 초기 데이터가 아닌 세컨 데이터이기 때문에 걸러진 내용이 호출 것 가틈
     */
    return (
        <>
            {getIssueState.loading ? (
                <LoadingPage />
            ) : (
                <S.DetailContainer>
                    <S.DetailAlert>
                        {userName} 님의 이슈를 조회하였습니다.
                    </S.DetailAlert>
                    <S.DetailHeader>
                        @{title} #{number}
                    </S.DetailHeader>
                    <S.DetailHr />
                    <S.DetailBody>
                        <S.BodyContents>
                            <S.BodyContHd>
                                {userName} {updatedAt}
                            </S.BodyContHd>
                            <S.BodyContBd>{body}</S.BodyContBd>
                        </S.BodyContents>
                        <S.BodyKeywords>fsdfdsff</S.BodyKeywords>
                    </S.DetailBody>
                </S.DetailContainer>
            )}
        </>
    );
}

export default DetailPage;

const DetailContainer = styled.div`
    width: 95%;
    ${MarginAuto}
    max-width: 120rem;
    @media screen and (max-width: 768px) {
    }
`;

const DetailAlert = styled.div`
    ${flexCenter}
    border-radius: 2rem;
    color: ${({ theme }) => theme.PALETTE.white};
    box-shadow: inset 0rem -0.5rem 1rem red;
    background: ${({ theme }) => theme.PALETTE.black};
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
    height: 4rem;
`;

const DetailHeader = styled.div`
    margin-top: 2rem;
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;

const DetailHr = styled.hr`
    margin: 2rem 0;
`;

const DetailBody = styled.div`
    ${flexBetween}
    width:100%;

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

const BodyContents = styled.div`
    position: relative;
    width: 70%;
    border: 0.1rem solid #aaa;
    border-radius: 1rem;
    padding: 2rem;
    overflow: hidden;
`;

const BodyContHd = styled.div`
    position: absolute;
    /* height: 4rem; */
    padding: 2rem;
    width: 100%;
    left: 0;
    top: 0;
    background: ${({ theme }) => theme.PALETTE.gray[100]};
    font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
    margin-bottom: 2rem;
`;

const BodyContBd = styled.div`
    padding-top: 4rem;
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
`;

const BodyKeywords = styled.div``;

const S = {
    DetailContainer,
    DetailHeader,
    DetailHr,
    DetailAlert,
    DetailBody,
    BodyContents,
    BodyContHd,
    BodyContBd,
    BodyKeywords,
};
