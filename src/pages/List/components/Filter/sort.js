import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { S } from './style'

function SortBox({ setGoPage }) {
	const navigate = useNavigate()
	const { owner, repository, sort, per_page } = useParams()
	const [selected, setSelected] = useState(sort)

	useEffect(() => {
		setGoPage(1)
		navigate(`/${owner}/${repository}/1/${selected}/${per_page}`)
	}, [selected])

	const onSelected = e => {
		setSelected(e.target.value)
	}

	return (
		<S.Select value={selected} onChange={onSelected}>
			<option value="created">생성순</option>
			<option value="updated">업데이트순</option>
			<option value="comments">댓글순</option>
		</S.Select>
	)
}
export default SortBox
