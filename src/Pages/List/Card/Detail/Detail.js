import { useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getIssue } from "../../../../Store/issueSlice";
import { FlexAlignCSS } from "../../../../Styles/common";

function DetailPage() {
  const { owner, repository, number } = useParams();
  const dispatch = useDispatch();
  const issue = useSelector((state) => state.issue.issue);
  const getIssueState = useSelector((state) => state.issue.getIssueState);

  const res = async () => {
    dispatch(getIssue({ owner, repository, number }));
  };

  useEffect(() => {
    res();
  }, []);

  console.log(issue);
  return (
    <Wrapper>
      {getIssueState.loading ? (
        <div>...로딩중</div>
      ) : (
        <DetailItem>
          <Title>
            <h2>Title : {issue.title}</h2>
          </Title>
          <Content>
            <h2>body</h2>
            <ReactMarkdown>{issue.body}</ReactMarkdown>
          </Content>
        </DetailItem>
      )}
    </Wrapper>
  );
}

export default DetailPage;

const Wrapper = styled.div`
  width: 100%;

  padding: 200px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DetailItem = styled.div`
  width: 100%;
  align-items: flex-start;
`;
const Title = styled.div`
  border-bottom: 1px solid black;
`;

const Content = styled.div`
  width: 100%;
`;
