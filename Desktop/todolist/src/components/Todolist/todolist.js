import { useEffect, useState } from 'react'
import AddTodo from '../AddTodo/addTodo'
import Todo from '../Todo/todo'
import styled from 'styled-components'

function Todolist({ filter }) {
	const [list, setList] = useState(() => readlocal())
	const onAddList = addList => {
		setList([...list, addList])
	}
	const onUpdateList = updateList => {
		setList(list.map(t => (t.id === updateList.id ? updateList : t)))
	}
	const onDeleteList = deleteList => {
		setList(list.filter(e => e.id !== deleteList.id))
		console.log(deleteList)
	}
	useEffect(() => {
		localStorage.setItem('list', JSON.stringify(list))
	}, [list])

	const filtered = getFilteredItems(list, filter)
	return (
		<Section>
			<Ul>
				{filtered.map(el => (
					<Todo
						key={el.id}
						todo={el}
						onUpdateList={onUpdateList}
						onDeleteList={onDeleteList}
					/>
				))}
			</Ul>
			<AddTodo onAddList={onAddList} />
		</Section>
	)
}
export default Todolist

function readlocal() {
	const list = localStorage.getItem('list')
	return list ? JSON.parse(list) : []
}

function getFilteredItems(todos, filter) {
	if (filter === 'all') return todos
	return todos.filter(el => el.status === filter)
}
const Ul = styled.ul`
	flex: 1 1 auto;
	overflow-y: auto;
`
const Section = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	background-color: var(--color-bg);
`
