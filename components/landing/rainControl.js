import { StarIcon } from '@chakra-ui/icons'
import {
	Box,
	Slider,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
	Tooltip,
	withDefaultSize,
} from '@chakra-ui/react'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function RainControl({ beamOpacity }) {
	const { scrollYProgress } = useScroll()

	const opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1])

	return (
		<motion.div style={{ opacity }}>
			<Tooltip label='adjust rainbow' bg={'0'} color={'white'} backgroundColor={'black'}>
				<Box position='fixed' left='0' bottom='0' bgColor={'black'}>
					<Slider
						aria-label={('min', 'max')}
						defaultValue={[80]}
						width={'100vw'}
						onChange={(val) => {
							// setRainbow(val)
							console.log('setRainbow is:', val)
							beamOpacity.set(val)
							console.log('beamOpacity is:', beamOpacity.get())
						}}
					>
						<SliderTrack>
							<SliderFilledTrack bgColor={'gray.800'} />
						</SliderTrack>
						<SliderThumb boxSize={6} index={1} bgColor={'gray.800'}>
							<Box color='white' as={StarIcon} />
						</SliderThumb>
					</Slider>
				</Box>
			</Tooltip>
		</motion.div>
	)
}
