import { urlFor } from '@/lib/sanity/sanity'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const ShowImage = ({ title = '', images = [], _id = null }) => {
	const [url, setUrl] = useState(null)

	useEffect(() => {
		if (_id && images.length > 0) {
			const currentImage = images.filter((image) => image._id === _id)[0].image
			setUrl(urlFor(currentImage).url())
		}
	}, [_id])

	return (
		<main className='relative w-full h-full rounded-xl'>
			{url && (
				<div className='relative w-full h-full rounded-xl'>
					<Image
						src={url}
						layout='fill'
						objectFit='cover'
						className='rounded-xl'
					/>
				</div>
			)}
			<p className='absolute top-1 left-2 bg-black rounded-lg p-1 px-2 text-blue-400'>
				{title}
			</p>
		</main>
	)
}

export default ShowImage
