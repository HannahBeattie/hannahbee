import {
	Box,
	Heading,
	HStack,
	Link,
	Spacer,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { React } from 'react'
import { useThemeColors } from '../components/constants'
import ContactAnimation from '../components/ContactAnimation'

export default function Contact() {
	const cols = useThemeColors()
	return (
		<Box>
			<Box
				backgroundColor={useColorModeValue('black', '')}
				h={'6rem'}
				left='5rem'
				top='0rem'
				right='0'
				position={'absolute'}
			/>
			<Box>
				<ContactAnimation zIndex={0} />

				<VStack
					marginTop={'-20'}
					zIndex={2}
					padding='2rem'
					display='flex'
					flexDir='column'
					justifyContent='center'
					alignItems='center'
					backgroundColor={cols.blurbbk2}
					color={cols.blurbfont}
					borderRadius='3px'
					className='blur2 glow'
				>
					<Text zIndex={1} paddingBottom={'1rem'}>
						CONTACT
					</Text>
					<HStack zIndex={1} spacing={'4rem'} p={5}>
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
					<NextLink
						paddingBottom={'2rem'}
						href='mailto:hannybeedesign@gmail.com'
						passHref
					>
						<Link paddingBottom={'2rem'} zIndex={2} _hover={{ textDecoration: null }}>
							hannybeedesign@gmail
						</Link>
					</NextLink>
				</VStack>
			</Box>
		</Box>
	)
}
