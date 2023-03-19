import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getIssues } from "../../Store/issues";
import { MarginAuto } from "../../Styles/common";
import IssueBox from "./Components/Box";
import LoadingPage from "../../Components/Loading";
import SortFilter from "./Components/Sort";

function MainPage() {
    const issues = useSelector((store) => store.issue.issues);
    console.log(issues);
    const getIssueState = useSelector((store) => store.issue.getIssuesState);
    const dispatch = useDispatch();

    const { owner, repository, page, sort, per_page } = useParams();
    console.log(owner, repository, page, sort, per_page);

    const getData = useCallback(() => {
        dispatch(
            getIssues({ owner, repository, params: { page, sort, per_page } })
        );
    }, [page, sort, per_page]);

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <>
            {getIssueState.loading ? (
                <LoadingPage />
            ) : (
                <>
                    <SortFilter />
                    <S.ListBox>
                        {issues.map((issue, index) => {
                            return (
                                <IssueBox
                                    key={index}
                                    labels={issue.labels}
                                    number={issue.number}
                                    title={issue.title}
                                    body={
                                        issue.body
                                            ? issue.body
                                                  .split("")
                                                  .splice(0, 99)
                                                  .join("") + "..."
                                            : issue.body
                                    }
                                    userName={issue.user.login}
                                    commentsLen={issue.comments}
                                    updatedAt={issue.updated_at}
                                />
                            );
                        })}
                    </S.ListBox>
                </>
            )}
        </>
    );
}

export default MainPage;

const ListBox = styled.ul`
    width: 95%;
    ${MarginAuto}
    max-width: 120rem;
    margin-bottom: 2rem;
`;

const S = {
    ListBox,
};
