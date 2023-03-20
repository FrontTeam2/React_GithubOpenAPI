import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getIssues } from "../../Store/issuesSlice";
import Card from "./Card/Card";

function ListPage() {
  const { owner, repository, page, sort, per_page } = useParams();
  const params = { page, sort, per_page };
  const dispatch = useDispatch();
  const issues = useSelector((state) => state.issues.issues);
  const getIssuesState = useSelector((state) => state.issues.getIssuesState);

  const res = async () => {
    dispatch(getIssues({ owner, repository, params }));
  };
  useEffect(() => {
    res();
  }, []);

  return (
    <ItemBox>
      {getIssuesState.loading ? (
        <LoadingItem>...로딩중</LoadingItem>
      ) : (
        <CardItem>
          {issues &&
            issues.map((item) => {
              return (
                <CardBox key={item.id}>
                  <Card issues={item} owner={owner} repository={repository} />
                </CardBox>
              );
            })}
        </CardItem>
      )}
    </ItemBox>
  );
}
export default ListPage;

const LoadingItem = styled.div`
  width: 100%;
  margin: 0 auto;
  font-size: 5rem;
`;

const ItemBox = styled.div`
  width: 100%;
  padding: 300px 0;
`;

const CardItem = styled.div`
  width: 100%;
`;

const CardBox = styled.div`
  margin: 30px 0;
`;
