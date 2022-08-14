import React from 'react'
import { motion } from 'framer-motion'
import { Text } from '@chakra-ui/react'

export default function Hello() {
	return (
		<motion.div
			animate={{
				color: ['RGBA(255, 255, 255, 0.80)', '#FFFFF0', '#FAF5FF'],
			}}
			transition={{
				ease: 'linear',
				repeat: Infinity,
				duration: 6,
			}}
		>
			<Text
				className='neon'
				fontSize={{ base: '9rem', md: '15rem', lg: '18rem' }}
				fontWeight={700}
			>
				Hello.
			</Text>
		</motion.div>
	)
}
