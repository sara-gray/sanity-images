import Head from 'next/head'
import { useState } from 'react'

import { getClient } from '@/lib/sanity/sanity.server'

import Menu from '@/components/Menu'
import ShowImage from '@/components/ShowImage'
import ShowNextImage from '@/components/ShowNextImage'

export default function Home({ images }) {
	const [imageId, setImageId] = useState(images ? images[0]._id : null)
	const [circle, setCircle] = useState(true)

	return (
		<main className='w-screen h-[200vh] bg-black text-white overflow-hidden'>
			<Head>
				<title>Sanity.io Image</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>

			<Menu images={images} changeShape={setCircle} changeImage={setImageId} />

			<h1 className='bg-red-700/70 p-4 text-center text-4xl w-1/3 text-white transform rotate-90 -translate-x-24 translate-y-48'>
				Testing Sanity.io Image Properties
			</h1>

			<section className='max-w-4xl mx-auto gap-4 text-2xl -mt-12 grid grid-cols-2 pb-24'>
				<div className='row-span-2 w-full h-[60vh]'>
					<ShowImage
						title='portrait'
						images={images}
						_id={imageId}
						circle={circle}
					/>
				</div>
				<div className='w-full h-[20vh]'>
					<ShowImage
						title='landscape'
						images={images}
						_id={imageId}
						circle={circle}
					/>
				</div>
				<div className='w-[30vh] h-[30vh]'>
					<ShowImage
						title='square'
						images={images}
						_id={imageId}
						circle={circle}
					/>
				</div>
				<div className='col-span-2 w-full h-[30vh]'>
					<ShowImage
						title='panorama'
						images={images}
						_id={imageId}
						circle={circle}
					/>
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
