import { Box, Image } from '@chakra-ui/react'
import { motion, useTime, useTransform } from 'framer-motion'

export const BouncyWrap = (props) => {
	const { size, zIndex } = props
	if (!size.width || !size.height) {
		return null
	}
	return (
		<Box position='absolute' zIndex={zIndex}>
			<Bouncy {...props} />
		</Box>
	)
}

function needsBounce(val, size) {
	if (val > size / 2) {
		return true
	} else if (val < -size / 2) {
		return true
	}
	return false
}

const Bouncy = ({ size, src, height, speed }) => {
	const hh = height ?? 24
	const pad = (80 * hh) / 24
	const topSpeed = 150 * (speed ?? 1)
	const rotDuration = (Math.random() * 80 + 30) * (1 / (speed || 1))
	const rotDir = Math.random() < 0.5 ? -1 : 1
	const ss = { width: size.width - pad, height: size.height - pad }
	const randX = Math.random() - 0.5
	const randY = Math.random() - 0.5
	let velX = topSpeed * (Math.random() - 0.5)
	let velY = topSpeed * (Math.random() - 0.5)
	const time = useTime()
	let prevX = randX * ss.width
	let prevY = randY * ss.height
	let prevTimeX = 0
	let prevTimeY = 0
	const x = useTransform(time, (tt) => {
		const dt = tt - prevTimeX
		prevTimeX = tt
		prevX = prevX + (dt / 1000) * velX
		if (needsBounce(prevX, ss.width)) {
			velX = -velX
		}
		return prevX
	})
	const y = useTransform(time, (tt) => {
		const dt = tt - prevTimeY
		prevTimeY = tt
		prevY = prevY + (dt / 1000) * velY
		if (needsBounce(prevY, ss.height)) {
			velY = -velY
		}
		return prevY
	})

	return (
		<motion.div
			style={{ x, y }}
			initial={{ rotate: Math.random() * 360 }}
			animate={{
				rotate: [0, rotDir * 360],
			}}
			transition={{
				ease: 'linear',
				repeat: Infinity,
				duration: rotDuration,
			}}
		>
			<Image
				alt='a series of floating objects such as planets, a sock and stars'
				src={src}
				height={`${hh}rem`}
			/>
		</motion.div>
	)
}
