import HotSpotImage from './HotSpotImage'

const ShowImage = ({ title = '', image = null, circle = false }) => {
	return (
		<main className='relative w-full h-full'>
			<HotSpotImage image={image} circle={circle} />
			<p className='absolute top-1 left-2 bg-pink-900/50 rounded-lg p-1 px-2 text-blue-400'>
				{title}
			</p>
		</main>
	)
}

export default ShowImage
