import {
	Box,
	Container,
	Heading,
	Hide,
	Image,
	Link,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'

import NextImage from 'next/image'
import React from 'react'
import { useThemeColors } from '../components/constants'
import coder from '../public/assets/spaceDoodles/coder.png'
import NextLink from 'next/link'
import stretch from '../public/assets/spaceDoodles/stretchboi.gif'
import planet from '../public/assets/spaceDoodles/planet.png'
import ContactAnimation from '../components/contactme/ContactAnimation'

const textProps = {
	fontSize: 'sm',
	lineHeight: 2,
	// position: 'center',
	paddingX: 5,
	fontWeight: 500,
}

export default function About() {
	const cols = useThemeColors()

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
			<Container
				backgroundColor={useColorModeValue('gray.300', 'gray.700')}
				paddingBottom={35}
				pb='16rem'
			>
				<Heading textAlign={'center'} paddingTop={35}>
					Hello.
				</Heading>

				<Text mt='3rem' {...textProps}>
					<Image
						src={'/assets/spaceDoodles/coder.png'}
						float='right'
						alt='an image of me coding, as a tiny astronaut'
						h={{ base: '7rem', lg: '10rem' }}
						w={{ base: '7rem', lg: '10rem' }}
						mb='0'
						mt={{ base: -4, md: 0 }}
					/>
					I am Hannah Bee from Wellington New Zealand. I began my journey as a dev in
					April of 2022 after dabbling in illustration, writing, photography and graphic
					design for years. I graduated from Dev Academy bootcamp in July 2022 and since
					then have been continuing to explore what I enjoy most about coding.
				</Text>
				<Text mt='1rem' {...textProps}>
					In my spare time I{' '}
					<Link
						textColor={'purple.500'}
						_hover={{ textColor: 'yellow.800' }}
						href='https://www.youtube.com/watch?v=1vTPe3x8G3U'
					>
						act
					</Link>{' '}
					a little, make props, create stop-motion {''}
					<NextLink href='https://www.youtube.com/watch?v=2QeoFsx1xp4' passHref>
						<Link textColor={'purple.500'} _hover={{ textColor: 'yellow.800' }}>
							videos
						</Link>
					</NextLink>{' '}
					and paint. <br></br>
					<br></br>I also design video game characters...so, watch this space!
					<br></br>
					<br></br>I like to approach everything I do with a playful, curious attitude
					that retains the wonder of noticing. <br></br>This means that I tend to be
					pretty good at problem solving and identifying solutions that fall outside of
					the hypothetical box.
					<br></br>
					<br></br> During various freelance jobs I have become aware that a big aspect of
					good branding has a lot to do with how you make people feel. <br></br>I like to
					make people feel seen and heard and collaborate in an open and holistic way that
					empowers others to see their vision come to life.
					<br></br>
					<br></br> I also have a cat. <br></br> His name is Mr. Big Stretch.
				</Text>
			</Container>
			<ContactAnimation hideSat />
			{/* <Hide below='md'> */}
			<Box h={'15rem'} w={'15rem'} bottom='3rem' position={'absolute'} right='20%'>
				<NextImage
					src={stretch}
					alt={'hand-drawn image of my cat attacking a tiny planet'}
				/>
			</Box>
			{/* </Hide> */}
		</>
	)
}
