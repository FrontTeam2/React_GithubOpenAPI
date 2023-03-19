import styled from "styled-components";
import {
    flexAlignCenter,
    flexBetween,
    flexCenter,
    MarginAuto,
} from "../../Styles/common";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoadingPage from "../../Components/Loading";
import { getAnIssues } from "../../Store/issue";
import { useEffect } from "react";

function DetailPage() {
    /**
     * 도은님은 초기 데이터를 담는 변수를 다르게 설정하여
     * 데이터를 받아왔음
     */
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location?.state);
    const { owner, repository, number } = useParams();
    const anIssues = useSelector((store) => store.anIssue.issue);
    const getAnIssueState = useSelector(
        (store) => store.anIssue.getAnIssuesState
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAnIssues({ owner, repository, number }));
    }, []);

    console.log(anIssues);
    console.log(anIssues.user);

    /**
     *
     * 초기 데이터가 여러 곳에서 이용되도록 서버 데이터를 호출하는 변수를 여러개 설정해야하는 듯
     * useLocation을 사용하면 state값으로 전달받은 키값을 활용 가능하나
     * 초기 데이터가 아닌 세컨 데이터이기 때문에 걸러진 내용이 호출 것 가틈
     */
    // if (!anIssues) return;
    return (
        <>
            {getAnIssueState.loading && anIssues ? (
                <LoadingPage />
            ) : (
                <S.DetailContainer>
                    <S.DetailAlert>
                        {location?.state.userName} 님의 이슈 게시물을
                        조회하였습니다.
                    </S.DetailAlert>
                    <S.DetailHeader>
                        @{anIssues.title} #{anIssues.number}
                    </S.DetailHeader>
                    <S.DetailHr />
                    <S.DetailBody>
                        <S.BodyContents>
                            <S.BodyContHd>
                                <p>
                                    {location?.state.userName}{" "}
                                    {anIssues.updated_at}
                                </p>
                                <p>comments ({location?.state.commentsLen})</p>
                            </S.BodyContHd>
                            <S.BodyContBd>
                                {anIssues.body}
                                {location?.state.labels.length > 0 && (
                                    <S.DetailLabels>
                                        <p>Label's Contents</p>
                                        {location?.state.labels.map(
                                            (item, index) => {
                                                return (
                                                    <li key={index}>
                                                        <h3>{item.id}</h3>
                                                        <p>
                                                            {item.description}
                                                        </p>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </S.DetailLabels>
                                )}
                            </S.BodyContBd>
                        </S.BodyContents>
                        <S.BodyKeywords>
                            <h3>Labels</h3>
                            <hr />
                            <ul>
                                {location?.state.labels.map((label, index) => {
                                    return <li key={index}>{label.name}</li>;
                                })}
                            </ul>
                        </S.BodyKeywords>
                    </S.DetailBody>

                    <S.ListNavigate>
                        <h3>더 많은 이슈를 확인해보세요.</h3>
                        <button
                            onClick={() =>
                                navigate(`/${owner}/${repository}/1/created/10`)
                            }
                        >
                            이슈 리스트로 돌아가기
                        </button>
                    </S.ListNavigate>
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
    margin-bottom: 2rem;
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
    line-height: ${({ theme }) => theme.FONT_SIZE.big};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;

const DetailHr = styled.hr`
    margin: 2rem 0;
`;

const DetailBody = styled.div`
    ${flexBetween}
    display:flex;
    width: 100%;
    margin-bottom: 2rem;
    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

const DetailLabels = styled.ul`
    & {
        margin-top: 2rem;
    }

    & > p {
        margin-bottom: 1rem;
    }

    & > li {
        border: 0.1rem solid #aaa;
        border-radius: 1rem;
        box-sizing: border-box;
        padding: 2rem;
        ${flexAlignCenter}
        background: ${({ theme }) => theme.PALETTE.white};
        height: 4rem;
        margin-bottom: 1rem;
    }

    & > li:last-child {
        margin-bottom: 0;
    }

    & > li:hover {
        background: ${({ theme }) => theme.PALETTE.gray[100]};
    }

    & > li > h3 {
        font-size: ${({ theme }) => theme.FONT_SIZE.small};
        margin-right: 2rem;
    }

    & > li > p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
        margin: 2rem 0 0;
    }
`;

const BodyContHd = styled.div`
    position: absolute;
    height: 4rem;
    ${flexBetween}
    ${flexAlignCenter}
    padding: 0 2rem;
    width: 100%;
    left: 0;
    top: 0;
    background: ${({ theme }) => theme.PALETTE.gray[100]};

    & > p {
        margin-right: 1rem;
        font-size: ${({ theme }) => theme.FONT_SIZE.small};
    }

    & > p:last-child {
        margin-right: 0;
    }
`;

const BodyContBd = styled.div`
    padding: 6rem 2rem 2rem;
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
    line-height: ${({ theme }) => theme.FONT_SIZE.medium};
`;

const BodyKeywords = styled.div`
    /* width: 100%; */
    width: 28%;
    padding: 2rem;
    /* background: red; */
    font-size: ${({ theme }) => theme.FONT_SIZE.small};

    & > hr {
        /* display: none; */
        margin: 2rem 0;
        background: ${({ theme }) => theme.PALETTE.gray[100]};
    }

    & > ul {
        ${flexAlignCenter}
        flex-wrap:wrap;
    }

    & > ul > li {
        flex-shrink: 0;
        padding: 0.5rem 1.5rem;
        border: 0.1rem solid #aaa;
        border-radius: 2rem;
        margin-bottom: 1rem;
    }

    & > ul > li:nth-child(odd) {
        margin-right: 1rem;
    }

    @media screen and (max-width: 768px) {
        & {
            width: 100%;
        }

        & > hr {
            display: block;
            margin-top: 2rem;
        }

        & > ul > li {
            margin-right: 1rem;
        }
    }
`;

const ListNavigate = styled.div`
    height: 24rem;
    border-radius: 1rem;
    box-shadow: inset 0rem 0rem 2rem red;
    background: ${({ theme }) => theme.PALETTE.black};
    ${flexCenter}
    flex-direction: column;

    & > h3 {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.PALETTE.white};
    }

    & > button {
        width: 28rem;
        height: 4rem;
        border-radius: 2rem;
        font-size: ${({ theme }) => theme.FONT_SIZE.small};
        cursor: pointer;
    }
`;

const S = {
    DetailContainer,
    DetailHeader,
    DetailHr,
    DetailAlert,
    DetailBody,
    DetailLabels,
    BodyContents,
    BodyContHd,
    BodyContBd,
    BodyKeywords,
    ListNavigate,
};
