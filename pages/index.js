import Head from 'next/head'
import ShowImage from '../components/ShowImage'
import { getClient } from '../lib/sanity/sanity.server'

export default function Home({ images }) {
	console.log(images)
	return (
		<main className='w-screen h-full bg-black text-white overflow-hidden'>
			<Head>
				<title>Sanity.io Image</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Square+Peg&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<h1 className='bg-red-700/70 p-4 text-center text-4xl w-1/3 text-white transform rotate-90 -translate-x-24 translate-y-48'>
				Testing Sanity.io Image Properties
			</h1>

			<section className='max-w-2xl mx-auto gap-2 text-2xl -mt-12 grid grid-cols-2 pb-24'>
				<div className='ring-2 rounded-xl row-span-2 w-full h-[62vh]'>
					<ShowImage title='portrait' />
				</div>
				<div className='ring-2 rounded-xl w-full h-[30vh]'>
					<ShowImage title='landscape' />
				</div>
				<div className='ring-2 rounded-xl w-[30vh] h-[30vh]'>
					{' '}
					<ShowImage title='square' />
				</div>
				<div className='ring-2 rounded-xl col-span-2 w-full h-[30vh]'>
					<ShowImage title='panorama' />
				</div>
			</section>
		</main>
	)
}

export async function getStaticProps() {
	const images = await getClient().fetch(`*[_type =='images']{
			name, image
		}`)

	return {
		props: { images },
	}
}
