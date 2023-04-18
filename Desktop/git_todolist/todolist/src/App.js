import { useState } from 'react'
import Header from './components/Header/header'
import Todolist from './components/Todolist/todolist'

const filters = ['all', 'active', 'completed']
function App() {
	const [filter, setFilter] = useState(filters[0])
	console.log(filter)
	return (
		<>
			<Header filters={filters} filter={filter} setFilter={setFilter} />
			<Todolist filter={filter} />
		</>
	)
}

export default App
