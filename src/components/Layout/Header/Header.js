import styled from 'styled-components'
import { flexAlignCenter } from '../../../styles/common'
import { AiOutlineSearch } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { searchIssue } from '../../../stores/search'

function Header() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const searchText = useSelector(store => store.search.text)
	const [inputText, setInputText] = useState('')

	useEffect(() => {
		setInputText(searchText)
	}, [searchText])

	const onChangeSearch = e => {
		setInputText(e.target.value)
	}

	const onSubmitSearch = () => {
		dispatch(searchIssue.editSearchText(inputText))
		const splitText = inputText.split('/')
		const owner = splitText[3]
		const repository = splitText[4]
		navigate(`/${owner}/${repository}/1/created/10`)
	}

	const handleKeyPress = e => {
		if (e.key === 'Enter') {
			onSubmitSearch()
		}
	}

	return (
		<S.Wrapper>
			<S.Container>
				<S.LogoBox onClick={() => (window.location.href = '/')}>
					<S.Logo src={process.env.PUBLIC_URL + '/logo.png'}></S.Logo>
					<S.Text>Github Issue</S.Text>
				</S.LogoBox>

				<S.InputBox
					value={inputText}
					placeholder="깃허브 레포지토리 주소를 복붙해주세요!"
					onChange={onChangeSearch}
					onKeyDown={handleKeyPress}
				></S.InputBox>
				<S.Icon onClick={onSubmitSearch}>
					<AiOutlineSearch size={35} />
				</S.Icon>
			</S.Container>
		</S.Wrapper>
	)
}
export default Header

const Wrapper = styled.div`
	padding: 16px;
	border-bottom: 2px solid ${({ theme }) => theme.PALETTE.gray[200]};
`

const Container = styled.div`
	width: 80%;
	${flexAlignCenter}
	justify-content: center;
	margin: 0 auto;
`

const LogoBox = styled.div`
	display: flex;
	align-items: center;
	:hover {
		cursor: pointer;
	}
`

const Logo = styled.img`
	width: 54px;
	height: 54px;
`

const Text = styled.div`
	margin-left: 10px;
	font-size: 20px;
`

const InputBox = styled.input`
	border-radius: 30px;
	:focus {
		outline: none;
	}
	width: 60%;
	font-size: 20px;
	margin-left: 5%;
	border: none;
	padding: 12px;
	padding-left: 35px;
`

const Icon = styled.div``

const S = {
	Wrapper,
	Container,
	LogoBox,
	Logo,
	Text,
	InputBox,
	Icon,
}
