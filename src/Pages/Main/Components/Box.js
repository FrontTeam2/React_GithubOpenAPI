import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { flexAlignCenter, flexBetween } from "../../../Styles/common";

function IssueBox({
    number,
    title,
    body,
    labels,
    commentsLen,
    userName,
    updatedAt,
}) {
    const { owner, repository } = useParams();
    const navigate = useNavigate();

    return (
        <S.IssueBoxList
            onClick={() =>
                navigate(`/${owner}/${repository}/${number}`, {
                    state: {
                        userName: userName,
                        commentsLen: commentsLen,
                        labels: labels,
                    },
                })
            }
        >
            <div>
                <p>{number}</p>
                <h3>{title ? title.split("").slice(0, 25).join("") : title}</h3>
                <p>comments({commentsLen})</p>
            </div>
            <p>{body}</p>
            <div>
                <p>{userName}</p>
                <p>{updatedAt}</p>
            </div>
        </S.IssueBoxList>
    );
}

export default IssueBox;

const IssueBoxList = styled.li`
    background: ${({ theme }) => theme.PALETTE.gray[100]};
    margin-bottom: 1rem;
    box-sizing: border-box;
    border-radius: 2rem;
    padding: 2rem;
    box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.PALETTE.white};
    }

    & > div:first-child {
        ${flexBetween}
        ${flexAlignCenter}
        text-align: center;
    }

    & > div:first-child > h3 {
        font-size: ${({ theme }) => theme.FONT_SIZE.small};
    }

    & > p {
        margin: 2rem 0;
    }

    & > div:last-child {
        ${flexAlignCenter}
        justify-content: right;
    }

    & > div:last-child > p:first-child {
        margin-right: 1rem;
    }
`;

const S = {
    IssueBoxList,
};
