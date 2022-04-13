import Image from 'next/image'

const ShowImage = ({ title = '' }) => {
	const url = '/image.jpg'
	return (
		<main className='relative w-full h-full rounded-xl'>
			<div className='relative w-full h-full rounded-xl'>
				<Image
					src={url}
					layout='fill'
					objectFit='cover'
					className='rounded-xl'
				/>
			</div>
			<p className='absolute top-1 left-2'>{title}</p>
		</main>
	)
}

export default ShowImage
