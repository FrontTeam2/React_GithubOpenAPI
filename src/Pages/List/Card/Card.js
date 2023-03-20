import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useNavigate } from "react-router-dom";
import remarkGfm from "remark-gfm";
import styled from "styled-components";

function Card({ issues, repository, owner }) {
  const navigate = useNavigate();

  const onClickDetail = () => {
    navigate(`/${owner}/${repository}/issues/${issues.number}`);
  };
  return (
    <>
      <CardItem>
        <Title onClick={onClickDetail}>{issues.title}</Title>
        <ReactMarkdown></ReactMarkdown>
        <InfoItem>
          <h5>작성자 : {issues.user.login}</h5>
          <h5>댓글 : {issues.comments}</h5>
        </InfoItem>
      </CardItem>
    </>
  );
}

export default Card;

const CardItem = styled.div`
  width: 800px;
  box-shadow: 3px 3px 3px 3px gray;
  margin: 0 auto;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  :hover {
    background-color: #e6e5e5;
  }
`;
const Title = styled.h3`
  cursor: pointer;
  :hover {
    color: blue;
  }
`;
const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
