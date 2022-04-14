import { urlFor } from '@/lib/sanity/sanity'
import { useEffect, useRef, useState } from 'react'

const ShowImage = ({ title = '', images = [], _id = null, circle = false }) => {
	const [url, setUrl] = useState(null)
	const displayArea = useRef(null)

	useEffect(() => {
		if (_id && images.length > 0) {
			const currentImage = images.filter((image) => image._id === _id)[0].image

			const w = displayArea.current.offsetWidth
			const h = displayArea.current.offsetHeight
			setUrl(urlFor(currentImage).size(`${w}`, `${h}`).url())
		}
	}, [_id])

	return (
		<main ref={displayArea} className='relative w-full h-full'>
			{url && (
				<div className='relative w-full h-full flex flex-col justify-center items-center'>
					<img src={url} style={{ borderRadius: circle ? '50%' : '0.5rem' }} />
				</div>
			)}
			<p className='absolute top-1 left-2 bg-pink-900/50 rounded-lg p-1 px-2 text-blue-400'>
				{title}
			</p>
		</main>
	)
}

export default ShowImage
