import { getClient } from '@/lib/sanity/sanity.server'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'

const ShowNextImage = ({ title = '', images = [], _id = null }) => {
	const imageProps = useNextSanityImage(getClient(), images[1].image)

	return (
		<main className='relative w-full h-full rounded-xl flex justify-center items-center'>
			<div className='relative w-full h-full rounded-xl block'>
				<Image
					{...imageProps}
					layout='responsive'
					sizes='200px'
					className='rounded-lg'
				/>
			</div>

			<p className='absolute top-1 left-2 bg-black rounded-lg p-1 px-2 text-blue-400'>
				{title}
			</p>
		</main>
	)
}

export default ShowNextImage
