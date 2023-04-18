import uuid from 'react-uuid'
import styled from 'styled-components'

function AddTodo({ onAddList }) {
	const onSubmitInput = e => {
		e.preventDefault()
		const inputText = e.target.input.value
		if (inputText.trim().length === 0) return
		onAddList({
			id: uuid(),
			text: inputText,
			status: 'active',
		})
	}
	return (
		<Form onSubmit={onSubmitInput}>
			<Input placeholder="TodoList추가하세요" name="input" />
			<Btn>입력</Btn>
		</Form>
	)
}
export default AddTodo

const Form = styled.form`
	width: 100%;
	display: flex;
	padding: 1.4rem 1rem;
	background-color: var(--color-bg-dark);
`
const Input = styled.input`
	flex: 1 0 auto;
	font-size: 1.4rem;
	padding: 0.7rem 1rem;
	border: none;
	outline: none;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
`
const Btn = styled.button`
	background-color: var(--color-accent);
	color: var(--color-white);
	font-weight: bold;
	font-size: 1.4rem;
	padding: 0 2rem;
	border-top-left-radius: 8px;
	border-bottom-right-radius: 8px;
	cursor: pointer;
	:hover {
		filter: brightness(125%);
	}
`
