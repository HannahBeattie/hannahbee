import { Flex, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import mrmr from '../../public/assets/mrmr.png'

export default function Leo() {
	return (
		<Flex>
			<motion.div
				animate={{
					rotate: [0, -5, 5, 10, 5, 0],
				}}
				transition={{
					ease: 'linear',
					repeat: Infinity,
					duration: 30,
				}}
			>
				<Image src={mrmr} href={'my cat'} />
			</motion.div>
		</Flex>
	)
}
