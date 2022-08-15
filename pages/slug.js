import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Slugme from '../components/Slugme'

function Slug() {
	return (
		<>
			<Box
				backgroundColor={useColorModeValue('purple.800', '')}
				h={'6rem'}
				// w={'9rem'}
				left='5rem'
				top='0rem'
				right='0'
				position={'absolute'}
			/>
			<Slugme />
		</>
	)
}

export default Slug
