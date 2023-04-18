import styled from 'styled-components'
function Header({ filter, filters, setFilter }) {
	return (
		<Headers>
			<Ul>
				{filters.map((el, idx) => (
					<Li key={idx}>
						<Btn onClick={() => setFilter(el)}>{el}</Btn>
					</Li>
				))}
			</Ul>
		</Headers>
	)
}
export default Header

const Headers = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--color-bg-dark);
	border-bottom: 1px solid var(--color-gray);
`
const Ul = styled.ul`
	display: flex;
`
const Li = styled.li``
const Btn = styled.button`
	font-size: 1.4rem;
	margin: 0.3rem;
	text-transform: capitalize;
	background-color: transparent;
	color: var(--color-accent);
	opacity: 0.8;
	font-weight: bold;

	:hover {
		opacity: 1;
	}
`
