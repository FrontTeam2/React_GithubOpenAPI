import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

function IssueDetailPage() {
	const params = useParams()
	const { id } = params
	const issues = useSelector(store => store.issue.issues)
	const getIssueState = useSelector(store => store.issue.getIssueState)
	const [issue, setIssue] = useState()
	console.log(issues)

	useEffect(() => {
		const issueFind = issues.find(item => item.id === id)
		setIssue(issueFind)
	}, [])
	console.log(issue)

	return (
		<>
			{issue &&
				(getIssueState.loading ? (
					<Loading />
				) : (
					<S.Wrapper>
						<S.Card>
							<S.Title>{issue.title}</S.Title>
						</S.Card>
					</S.Wrapper>
				))}
		</>
	)
}
export default IssueDetailPage
const Wrapper = styled.li`
	margin: 10px 0;
`

const Card = styled.div`
	padding: 20px;
	background-color: ${({ theme }) => theme.PALETTE.gray[100]};
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	border-radius: 10px;
`

const Title = styled.div``

const S = {
	Wrapper,
	Title,
	Card,
}
