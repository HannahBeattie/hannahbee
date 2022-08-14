import { Box } from '@chakra-ui/react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { React, useRef } from 'react'
import me from '../../public/assets/me.jpg'

export default function Appear() {
	const { scrollYProgress } = useScroll()
	const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [0, 1, 0], {
		clamp: true,
	})
	return (
		<motion.div
			style={{ opacity }}
			animate={{
				rotate: [0, -5, 5, 10, 5, 0],
			}}
			transition={{
				ease: 'linear',
				repeat: Infinity,
				duration: 30,
			}}
		>
			<Box right='8' className='glowMore'>
				<Image src={me} alt='me' />
			</Box>
		</motion.div>
	)
}
