import { Box, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import spaceman from '../../public/assets/spaceDoodles/spaceman.png'
import spacecat from '../../public/assets/spaceDoodles/cat.png'
import scope from '../../public/assets/spaceDoodles/scope.png'
import base from '../../public/assets/spaceDoodles/spacebase.png'

export default function Scene() {
	const w = 50
	const h = 50
	return (
		<Box>
			<Box left='10' bottom='4rem' position={'absolute'}>
				<Image width={w} height={h} alt='handrawn cat' src={spacecat} />
				<Image width={w} height={h} alt='handrawn telescope' h={'1rem'} src={scope} />
			</Box>
			<Box width={w} height={h} right='6rem' bottom='4.5rem' position={'absolute'}>
				<Image alt='handrawn spaceman' src={spaceman} />
			</Box>
			<Box width='8rem' height='8rem' right='-2' bottom='3.5rem' position={'absolute'}>
				<Image alt='handrawn spacebase' src={base} />
			</Box>
		</Box>
	)
}
