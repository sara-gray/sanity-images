import { useState } from 'react'
import Image from 'next/image'
import { BiMenu } from 'react-icons/bi'
import { urlFor } from '@/lib/sanity/sanity'

const Menu = ({ images, handleClick }) => {
	const [showImages, setShowImages] = useState(false)

	return (
		<div className='fixed top-8 right-8 w-32 flex flex-col justify-center items-center'>
			<BiMenu
				className='text-4xl'
				onClick={() => {
					setShowImages(!showImages)
				}}
			/>
			{showImages && (
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
										handleClick(_id)
									}}
								/>
							</li>
						)
					})}
				</ul>
			)}
		</div>
	)
}

export default Menu
