import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { S } from './style'

function PerPageBox({ setGoPage }) {
	const navigate = useNavigate()
	const { owner, repository, sort, per_page } = useParams()
	const [selected, setSelected] = useState(per_page)

	useEffect(() => {
		setGoPage(1)
		navigate(`/${owner}/${repository}/1/${sort}/${selected}`)
	}, [selected])

	const onSelected = e => {
		setSelected(e.target.value)
	}

	return (
		<S.Select value={selected} onChange={onSelected}>
			<option value="10">10개씩</option>
			<option value="20">20개씩</option>
			<option value="50">50개씩</option>
		</S.Select>
	)
}
export default PerPageBox
