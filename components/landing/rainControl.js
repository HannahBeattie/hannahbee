import { StarIcon } from '@chakra-ui/icons'
import { Box, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Tooltip } from '@chakra-ui/react'
import React from 'react'

export default function RainControl({ beamOpacity }) {
	return (
		<Box position='fixed' left='0' bottom='0' bgColor={'black'}>
			<Slider
				aria-label={['min', 'max']}
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
	)
}
