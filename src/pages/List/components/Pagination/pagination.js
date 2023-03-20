import styled from 'styled-components'

function Pagination({ totalPage, limit, page, setPage }) {
	console.log(page)
	return (
		<S.Wrapper>
			<S.ArrowButton onClick={() => setPage(1)} disabled={page === 1}>
				&lt;&lt;
			</S.ArrowButton>
			<S.ArrowButton onClick={() => setPage(page - 1)} disabled={page === 1}>
				&lt;
			</S.ArrowButton>
			{Array(limit)
				.fill()
				.map((_, i) => {
					return (
						<S.NumberButton key={i + 1} onClick={() => setPage(i + 1)}>
							{i + 1}
						</S.NumberButton>
					)
				})}
			<S.ArrowButton
				disabled={page === totalPage}
				onClick={() => setPage(page + 1)}
			>
				&gt;
			</S.ArrowButton>
			<S.ArrowButton
				onClick={() => setPage(totalPage)}
				disabled={page === totalPage}
			>
				&gt;&gt;
			</S.ArrowButton>
		</S.Wrapper>
	)
}
export default Pagination

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	text-align: center;
	margin-bottom: 5%;
`
const NumberButton = styled.button`
	color: black;
	padding: 8px 10px;
	text-align: center;
	text-decoration: none;
	width: 36px;
	height: 36px;
	background-color: #fff;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	:hover {
		background-color: ${({ theme }) => theme.PALETTE.gray[200]};
	}
	/* .active {
		background-color: ${({ theme }) => theme.PALETTE.gray[200]};
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[300]};
	} */
`
const ArrowButton = styled.button`
	color: black;
	padding: 8px 10px;
	text-align: center;
	text-decoration: none;
	width: 36px;
	height: 36px;
	background-color: #fff;

	:hover {
		background-color: ${({ theme }) => theme.PALETTE.gray[200]};
	}
	/* .active {
		background-color: ${({ theme }) => theme.PALETTE.gray[200]};
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[300]};
	} */
`

const S = {
	Wrapper,
	NumberButton,
	ArrowButton,
}
