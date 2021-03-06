import { useState } from 'react'
import { urlFor } from '@/lib/sanity/sanity'

const Menu = ({ images, changeImage, changeShape }) => {
	const [circle, setCircle] = useState(true)
	return (
		<div className='fixed top-8 right-8 w-24 flex flex-col justify-center items-center'>
			<ul className='flex justify-around w-full'>
				<li
					className='rounded-full w-8 h-8 cursor-pointer'
					style={{ backgroundColor: circle ? 'white' : '#666' }}
					onClick={() => {
						changeShape(!circle)
						setCircle(!circle)
					}}></li>
				<li
					className='rounded-lg w-8 h-8 cursor-pointer'
					style={{ backgroundColor: !circle ? 'white' : '#666' }}
					onClick={() => {
						changeShape(!circle)
						setCircle(!circle)
					}}></li>
			</ul>

			<ul className='flex flex-col justify-center items-center'>
				{images.map((i) => {
					const { image, name, _id } = i
					const url = urlFor(image).url()

					return (
						<li
							key={_id}
							className='relative w-1/2 h-full rounded-lg hover:scale-110 my-4'>
							<img
								src={url}
								className='rounded-lg cursor-pointer'
								onClick={() => {
									changeImage(_id)
								}}
							/>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Menu
