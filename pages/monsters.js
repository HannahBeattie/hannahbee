import { Grid, GridItem, Box, HStack, VStack, Text, Image } from '@chakra-ui/react'
import React from 'react'

const monstPath = '/assets/monsters'
const monstCount = 15
const monstUrls = []
for (let ii = 0; ii < monstCount; ii++) {
	monstUrls.push(`${monstPath}/${ii}.${ii === 9 ? 'png' : 'jpeg'}`)
}

export default function Monsters() {
	return (
		<>
			<HStack
				// backgroundColor={'blue'}
				display={{ base: 'none', md: 'flex' }}
				maxW='100vw'
				w='100vw'
				overflowX='auto'
				// alignItems='stretch'
				alignItems='center'
				flex='1'
				spacing='8'
				p='8'
				// maxH='70vh'
			>
				{monstUrls.map((url, idx) => (
					<Box key={`monst-${idx}`} minW='20rem'>
						<Image src={url} alt={`monster image number ${idx}`} />
					</Box>
				))}
			</HStack>
			<VStack
				// backgroundColor={'purple'}
				display={{ base: 'flex', md: 'none' }}
				alignItems='stretch'
				flex='1'
				spacing='8'
				pb='8'
			>
				{monstUrls.map((url, idx) => (
					<Box key={`monst-${idx}`}>
						<Image src={url} alt={`monster image number ${idx}`} />
					</Box>
				))}
			</VStack>
		</>
	)
}
