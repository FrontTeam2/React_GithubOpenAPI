import { FaTrashAlt } from 'react-icons/fa'
import styled from 'styled-components'
function Todo({ todo, onUpdateList, onDeleteList }) {
	const { text, status } = todo
	const onCheckBox = e => {
		onUpdateList({ ...todo, status: e.target.checked ? 'completed' : 'active' })
	}
	const onDelete = () => onDeleteList(todo)
	return (
		<Li>
			<Input
				type="checkbox"
				checked={status === 'completed'}
				onChange={onCheckBox}
			/>
			<Label>{text}</Label>
			<Span>
				<Btn onClick={onDelete}>
					<FaTrashAlt />
				</Btn>
			</Span>
		</Li>
	)
}
export default Todo

const Li = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1rem;
	margin: 0.1rem 0;
	color: var(--color-text);
`
const Label = styled.label`
	flex: 1 1 0%;
	margin-left: 0.5rem;
	font-size: 1.5rem;
`
const Input = styled.input`
	width: 1.5rem;
	height: 1.5rem;
`
const Span = styled.span`
	width: 26px;
	height: 26px;
	background-color: var(--color-gray);
	border-radius: 100%;
	:hover {
		background-color: var(--color-accent);
		transform: rotate(15deg) scale(1.2);
	}
	transition: all 150ms ease-out;
`
const Btn = styled.button`
	color: var(--color-text);
	background-color: transparent;
`
