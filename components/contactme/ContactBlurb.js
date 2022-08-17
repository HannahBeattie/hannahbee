import { Box, Container, Heading, HStack, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
export default function ContactBlurb() {
	return (
		<Box p={'4rem'} paddingBottom={'4rem'}>
			<Heading>Hello you!</Heading>
			<br></br>
			<Text>Here is some contact information,</Text>
			<Text>use it wisely.</Text>
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
		</Box>
	)
}
