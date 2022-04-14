import { useState } from 'react'
import Image from 'next/image'
import { BiMenu } from 'react-icons/bi'
import { urlFor } from '@/lib/sanity/sanity'

const Menu = ({ images, changeShape, changeImage }) => {
	const [circle, setCircle] = useState(true)
	return (
		<div className='fixed top-8 right-8 w-32 flex flex-col justify-center items-center'>
			<ul className='flex justify-between w-full'>
				<li
					className='rounded-full w-12 h-12 cursor-pointer'
					style={{ backgroundColor: circle ? 'white' : '#333' }}
					onClick={() => {
						setCircle(!circle)
						changeShape(!circle)
					}}></li>
				<li
					className='rounded-lg w-12 h-12 cursor-pointer'
					style={{ backgroundColor: !circle ? 'white' : '#333' }}
					onClick={() => {
						setCircle(!circle)
						changeShape(!circle)
					}}></li>
			</ul>

			<ul>
				{images.map((i) => {
					const { image, name, _id } = i
					const url = urlFor(image).url()

					return (
						<li
							key={_id}
							className='relative w-full h-full rounded-lg hover:scale-110 my-4'>
							<Image
								src={url}
								alt={name}
								width={300}
								height={200}
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
