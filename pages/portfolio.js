import { Box } from '@chakra-ui/react'
import React from 'react'
import { Cards } from '../components/portfolio/Cards'
import { useThemeColors } from '../components/constants'

export default function Portfolio() {
	const cols = useThemeColors()
	return (
		<>
			<Box
				backgroundColor={cols.bkdrop}
				h={'6rem'}
				w={'8.5rem'}
				left='5rem'
				top='0rem'
				position={'absolute'}
			/>

			<Cards />
		</>
	)
}
