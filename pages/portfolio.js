import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Cards } from '../components/portfolio/Cards'
import { useThemeColors } from '../components/constants'
import Image from 'next/image'
import painter from '../public/assets/spaceDoodles/painter2.png'
import { motion } from 'framer-motion'

export default function Portfolio() {
	const cols = useThemeColors()
	const h = '5rem'
	const w = '5rem'

	return (
		<>
			<Box
				backgroundColor={useColorModeValue('black', '')}
				h={'6rem'}
				left='5rem'
				top='0rem'
				right='0'
				position={'absolute'}
			/>
			{/* <Box h={h} w={w} left='12.5rem' top='-1rem' position={'absolute'}>
				<Image src={painter} alt={'hand-drawn image of astranaut painting logo'} />
			</Box> */}

			<Cards />
		</>
	)
}
