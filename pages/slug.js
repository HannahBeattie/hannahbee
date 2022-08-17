import { Box, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Slugme from '../components/Slugme'

function Slug() {
	return (
		<>
			<Head>
				<title>Sluglyf</title>
			</Head>
			<Box
				backgroundColor={useColorModeValue('purple.800', '')}
				h={'6rem'}
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
