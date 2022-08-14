import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Box } from '@chakra-ui/react'

function LaserBeam({ beamId, beamOpacity }) {
	const { scrollYProgress } = useScroll()
	let xform

	const beam = {
		height: useTransform(scrollYProgress, [0.2, 0.48], ['0vh', '100vh'], {
			clamp: true,
		}),
		width: useTransform(scrollYProgress, [0.5, 0.7], ['0.3vw', '100vw'], {
			clamp: true,
		}),
		opacity: useTransform(beamOpacity, [0, 100], ['0%', '90%'], {
			clamp: true,
		}),
	}

	return (
		<Box
			position='fixed'
			top='0'
			bottom='0'
			left='0'
			right='0'
			display='flex'
			flexDirection='row'
			justifyContent='center'
			alignItems='flex-start'
			zIndex={'0'}
		>
			<motion.div
				animate={{
					background: ['#0BC5EA', '#805AD5', '#68D391', '#F6E05E'],
				}}
				style={{
					width: beam.width,
					height: beam.height,
					opacity: beam.opacity,
					display: 'flex',
				}}
				transition={{
					ease: 'linear',
					duration: beam.duration,
					repeat: Infinity,
				}}
			/>
		</Box>
	)
}

export default LaserBeam
