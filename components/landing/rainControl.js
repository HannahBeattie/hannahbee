import { StarIcon } from '@chakra-ui/icons'
import {
	Box,
	HStack,
	Slider,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
	Text,
	Tooltip,
	withDefaultSize,
} from '@chakra-ui/react'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function RainControl({ beamOpacity }) {
	const { scrollYProgress } = useScroll()

	const opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1])
	const offset = useTransform(scrollYProgress, [0.5, 0.6], ['3rem', '0rem'])

	return (
		<Box position='fixed' left='0' bottom='0' right='0' overflow='visible'>
			<motion.div
				style={{
					opacity,
					y: offset,
					backgroundColor: 'black',
					// paddingHorizontal: '2rem',
					paddingLeft: '2rem',
					paddingRight: '2rem',
					paddingTop: '0.5rem',
					paddingBottom: '0.5rem',
				}}
			>
				{/* <Tooltip label='adjust rainbow' bg={'0'} color={'white'} backgroundColor={'black'}> */}
				<HStack>
					<Text fontSize='sm'>Adjust rainbow</Text>
					<Slider
						aria-label={('min', 'max')}
						defaultValue={[80]}
						// width={'100vw'}
						display='flex'
						flex='1'
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
				</HStack>
				{/* </Tooltip> */}
			</motion.div>
		</Box>
	)
}
