import styled from "styled-components";
import {
    flexAlignCenter,
    flexBetween,
    flexCenter,
    MarginAuto,
} from "../../Styles/common";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoadingPage from "../../Components/Loading";
import { getAnIssues } from "../../Store/issue";
import { useEffect } from "react";

function DetailPage() {
    /**
     * 도은님은 초기 데이터를 담는 변수를 다르게 설정하여
     * 데이터를 받아왔음
     */

    const { owner, repository, number } = useParams();
    const anIssues = useSelector((store) => store.anIssue.issue);
    const getAnIssueState = useSelector(
        (store) => store.anIssue.getAnIssuesState
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAnIssues({ owner, repository, number }));
    }, []);

    console.log(anIssues.user.login);
    /**
     * 초기 데이터가 여러 곳에서 이용되도록 서버 데이터를 호출하는 변수를 여러개 설정해야하는 듯
     * useLocation을 사용하면 state값으로 전달받은 키값을 활용 가능하나
     * 초기 데이터가 아닌 세컨 데이터이기 때문에 걸러진 내용이 호출 것 가틈
     */
    return (
        <>
            {getAnIssueState.loading ? (
                <LoadingPage />
            ) : (
                <S.DetailContainer>
                    <S.DetailAlert>
                        {anIssues.user.login}님의 이슈 게시물을 조회하였습니다.
                    </S.DetailAlert>
                    <S.DetailHeader>
                        @{anIssues.title} #{anIssues.number}
                    </S.DetailHeader>
                    <S.DetailHr />
                    <S.DetailBody>
                        <S.BodyContents>
                            <S.BodyContHd>
                                {anIssues.user.login} {anIssues.updated_at}
                            </S.BodyContHd>
                            <S.BodyContBd>{anIssues.body}</S.BodyContBd>
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
    border-radius: 1rem;
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
    /* padding: 2rem; */
    overflow: hidden;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const BodyContHd = styled.div`
    position: absolute;
    height: 4rem;
    ${flexAlignCenter}
    padding-left: 2rem;
    width: 100%;
    left: 0;
    top: 0;
    background: ${({ theme }) => theme.PALETTE.gray[100]};
    font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
`;

const BodyContBd = styled.div`
    padding: 6rem 2rem 2rem;
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
