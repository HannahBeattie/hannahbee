import { Box } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import rocket from '../../public/assets/spaceDoodles/ship.png'

export default function Scroll() {
	const h = 80
	const w = 80
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	const { scrollYProgress } = useScroll()
	const opacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1], {
		clamp: true,
	})
	return (
		<motion.div style={{ opacity }}>
			<Box
				position='fixed'
				right='8'
				bottom='5rem'
				onClick={scrollToTop}
				cursor='pointer'
				zIndex={8}
			>
				<Image height={h} width={w} src={rocket} alt='hand-drawn rocket image' />
			</Box>
		</motion.div>
	)
}
