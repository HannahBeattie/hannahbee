import { Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
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
				<Image alt='a beautiful confused-looking cat' src={mrmr} href={'my cat'} />
			</motion.div>
		</Flex>
	)
}
