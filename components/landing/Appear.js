import { motion, useInView } from 'framer-motion'
import { React, useRef } from 'react'

export default function Appear({ children }) {
	const ref = useRef(null)
	const isInView = useInView(ref)

	return (
		<section ref={ref}>
			<motion.div
				ref={ref}
				style={{
					transform: isInView ? 'none' : 'translateX(-400px)',
					opacity: isInView ? 1 : 0,
					transition: 'all 1s cubic-bezier(0.25, 0.55, 0.55, 1) 1s',
				}}
			>
				{children}
			</motion.div>
		</section>
	)
}
