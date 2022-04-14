import Head from 'next/head'
import { useEffect, useState } from 'react'

import { getClient } from '@/lib/sanity/sanity.server'

import Menu from '@/components/Menu'
import ShowImage from '@/components/ShowImage'

export default function Home({ images }) {
	const [imageId, setImageId] = useState(images ? images[0]._id : null)
	const [currentImage, setCurrentImage] = useState(
		images ? images[0].image : null
	)
	const [circle, setCircle] = useState(true)

	const getImageFromId = (_id) => {
		return images.filter((image) => image._id === _id)[0].image
	}

	const handleImageChange = (_id) => {
		setImageId(_id)
		setCurrentImage(getImageFromId(_id))
	}

	const handleShapeChange = (isCircle) => {
		setCircle(isCircle)
	}

	return (
		<main className='w-screen bg-black text-white'>
			<Head>
				<title>Sanity.io Image</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>

			<Menu
				images={images}
				changeImage={handleImageChange}
				changeShape={handleShapeChange}
			/>

			<h1 className='bg-red-700/70 p-4 text-center text-4xl w-1/3 text-white lg:transform lg:rotate-90 lg:-translate-x-24 lg:translate-y-48'>
				Testing Sanity.io Image Properties
			</h1>

			<section className='max-w-2xl md:max-w-lg mx-auto gap-4 text-2xl lg:-mt-12 grid grid-cols-1  lg:grid-cols-2 pb-24'>
				<div className='lg:row-span-2 w-full h-[400px] ring-2 rounded-lg'>
					<ShowImage title='portrait' image={currentImage} circle={circle} />
				</div>
				<div className='w-full h-1/2 ring-2 rounded-lg'>
					<ShowImage title='landscape' image={currentImage} circle={circle} />
				</div>
				<div className='w-[30vh] h-[30vh] ring-2 rounded-lg'>
					<ShowImage title='square' image={currentImage} circle={circle} />
				</div>
				<div className='lg:col-span-2 w-full h-[100px] ring-2 rounded-lg'>
					<ShowImage title='panorama' image={currentImage} circle={circle} />
				</div>
			</section>
		</main>
	)
}

export async function getStaticProps() {
	const images = await getClient().fetch(`*[_type =='images']{
			name, image, _id
		}`)

	return {
		props: { images },
	}
}
