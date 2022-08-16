import {
	Box,
	Container,
	Heading,
	HStack,
	Link,
	Spacer,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'

export default function Contact() {
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

			<Container paddingTop={'3rem'}>
				<Heading>Hello you!</Heading>
				<br></br>
				<Text>Here is some contact information,</Text>
				<Text>se it wisely.</Text>
				<br></br>
				<HStack spacing={'3rem'} py={'1rem'}>
					<NextLink href='https://www.linkedin.com/in/hannah-bee-2b36aa246/' passHref>
						<Link _hover={{ textDecoration: null }}>
							<Text>Linkedin</Text>
						</Link>
					</NextLink>

					<NextLink href='https://github.com/HannahBeattie' passHref>
						<Link _hover={{ textDecoration: null }}>
							<Text>Github</Text>
						</Link>
					</NextLink>
				</HStack>

				<NextLink href='mailto:hannybeedesign@gmail.com' passHref>
					<Link _hover={{ textDecoration: null }}>hannybeedesign@gmail</Link>
				</NextLink>
			</Container>
		</>
	)
}
