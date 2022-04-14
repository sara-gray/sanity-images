import { urlFor } from '@/lib/sanity/sanity'
import { useEffect, useRef, useState } from 'react'

const HotSpotImage = ({ image = null, circle = false }) => {
	const [url, setUrl] = useState(null)
	const displayArea = useRef(null)

	useEffect(() => {
		if (image) {
			setUrl(
				urlFor(image)
					.size(
						`${displayArea.current.offsetWidth}`,
						`${displayArea.current.offsetHeight}`
					)
					.url()
			)
		}
	}, [image])

	return (
		<div ref={displayArea} className='relative w-full h-full'>
			{url && (
				<div className='flex justify-center items-center'>
					<img src={url} style={{ borderRadius: circle ? '50%' : '0.5rem' }} />
				</div>
			)}
		</div>
	)
}

export default HotSpotImage
