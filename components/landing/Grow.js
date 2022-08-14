import { Box, Image } from '@chakra-ui/react'
import { motion, useTime, useTransform } from 'framer-motion'

export const GrowWrap = (props) => {
	const { size, zIndex } = props
	if (!size.width || !size.height) {
		return null
	}
	return (
		<Box position='absolute' zIndex={zIndex}>
			<Grow {...props} />
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

export const Grow = ({ size, src, height, speed }) => {
	const hh = height ?? 40
	const pad = (100 * hh) / 40
	const topSpeed = 15 * (speed ?? 1)
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
			animate={{
				scale: [1, 3, 1],
				rotate: [0, rotDir * 360],
			}}
			transition={{
				ease: 'linear',
				repeat: Infinity,
				duration: rotDuration,
			}}
		>
			<Image src={src} height={hh} />
		</motion.div>
	)
}
