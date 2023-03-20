import styled from 'styled-components'
import { flexCenter, marginAuto } from '../styles/common'
function Loading() {
	return (
		<S.Wrapper>
			<S.Container>
				<S.Icon src={process.env.PUBLIC_URL + '/loading.gif'}></S.Icon>
				<S.Text>이슈를 불러오는 중입니다</S.Text>
			</S.Container>
		</S.Wrapper>
	)
}
export default Loading

const Wrapper = styled.div`
	width: 100%;
	height: 80vh;
	${flexCenter}
`

const Container = styled.div`
	width: 50%;
	${marginAuto}
	${flexCenter}
	flex-direction: column;
`

const Icon = styled.img``

const Text = styled.div`
	font-size: 20px;
	font-weight: bold;
`

const S = {
	Wrapper,
	Container,
	Icon,
	Text,
}
