import { useParams } from 'react-router-dom'
import { SnickersModels, snickersModels } from '../state'

const getCurrentModel = (model: string | undefined, id: string | undefined) => {
	if (model && id) {
		return snickersModels[model as keyof SnickersModels].find(
			el => el.id === id
		)
	}
	return null
}

export const Model = () => {
	const { model, id } = useParams()

	const currentModel = getCurrentModel(model, id)

	return (
		<div style={{ textAlign: 'center' }}>
			{currentModel ? (
				<>
					<h2>{currentModel.model}</h2>
					<h4>{currentModel.collection}</h4>
					<h3>{currentModel.price}</h3>
					<img
						src={currentModel.picture}
						alt={currentModel.model}
						style={{ width: '606px', height: 'auto', marginRight: '10px' }}
					/>
				</>
			) : (
				<h2>This model is not available</h2>
			)}
		</div>
	)
}
