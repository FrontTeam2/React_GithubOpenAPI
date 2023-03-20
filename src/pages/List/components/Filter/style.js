import styled from 'styled-components'

const Select = styled.select`
	padding: 8px 8px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	outline: none;
`

export const S = {
	Select,
}
