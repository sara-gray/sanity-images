import { urlFor } from '@/lib/sanity/sanity'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const ShowImage = ({ title = '', images = [], _id = null }) => {
	const [url, setUrl] = useState(null)
	const displayArea = useRef()

	useEffect(() => {
		if (_id && images.length > 0) {
			const currentImage = images.filter((image) => image._id === _id)[0].image

			const w = displayArea.current.offsetWidth
			const h = displayArea.current.offsetHeight
			setUrl(urlFor(currentImage).size(`${w}`, `${h}`).url())
		}
	}, [_id])

	return (
		<main className='relative w-full h-full rounded-full '>
			{url && (
				<div
					ref={displayArea}
					className='relative w-full h-full rounded-full flex flex-col justify-center items-center'>
					<img src={url} className='rounded-full' />
				</div>
			)}
			<p className='absolute top-1 left-2 bg-black rounded-lg p-1 px-2 text-blue-400'>
				{title}
			</p>
		</main>
	)
}

export default ShowImage
