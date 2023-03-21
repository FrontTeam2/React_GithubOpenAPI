import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Loading from '../../components/Loading'
import { getIssue } from '../../stores/issue'
import { searchIssue } from '../../stores/search'
import { marginAuto } from '../../styles/common'
import IssueCard from './components/Card/card'
import PerPageBox from './components/Filter/perPage'
import SortBox from './components/Filter/sort'
import Pagination from './components/Pagination/pagination'

function IssueListPage() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const issues = useSelector(store => store.issue.issues)
	const getIssueState = useSelector(store => store.issue.getIssueState)
	console.log(issues)
	const { owner, repository, page, sort, per_page } = useParams()
	const [goPage, setGoPage] = useState(1)
	const totalItem = 200
	const totalPage = Math.ceil(totalItem / per_page)
	const limit = 10

	useEffect(() => {
		dispatch(
			searchIssue.editSearchText(`https://github.com/${owner}/${repository}`),
		)
	}, [])

	useEffect(() => {
		navigate(`/${owner}/${repository}/${goPage}/${sort}/${per_page}`)
	}, [goPage])

	const onNavigateDetailPage = id => {
		console.log(id)
		navigate(`/${owner}/${repository}/${id}`)
	}

	const getData = useCallback(async () => {
		console.log('getData')
		dispatch(getIssue({ owner, repository, params: { page, sort, per_page } }))
	}, [owner, repository, page, sort, per_page])

	useEffect(() => {
		console.log('getData2')
		getData()
	}, [getData])

	console.log(page, goPage)

	return (
		<>
			{getIssueState.loading ? (
				<Loading />
			) : (
				<>
					<S.Wrapper>
						<S.Container>
							<S.Title>List</S.Title>
							<S.Filter>
								<SortBox setGoPage={setGoPage} />
								<PerPageBox setGoPage={setGoPage} />
							</S.Filter>
							<S.Content>
								{issues &&
									issues.map(issue => {
										return (
											<IssueCard
												key={issue.id}
												issue={issue}
												onNavigate={() => onNavigateDetailPage(issue.id)}
											/>
										)
									})}
							</S.Content>
							<Pagination
								totalPage={totalPage}
								limit={limit}
								page={goPage}
								setPage={setGoPage}
							/>
						</S.Container>
					</S.Wrapper>
				</>
			)}
		</>
	)
}
export default IssueListPage

const Wrapper = styled.div`
	width: 100%;
`
const Container = styled.div`
	width: 50%;
	${marginAuto}
`

const Title = styled.div`
	font-size: 20px;
	margin-top: 15px;
	margin-bottom: 15px;
`

const Filter = styled.div``

const Content = styled.ul`
	${marginAuto}
	text-align: center;
`
const S = {
	Wrapper,
	Container,
	Title,
	Filter,
	Content,
}
