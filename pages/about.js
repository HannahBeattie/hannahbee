import { Box, Flex, Heading, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import { bodyStreamToNodeStream } from 'next/dist/server/body-streams'
import Image from 'next/image'
import React from 'react'
import { useThemeColors } from '../components/constants'
import coder from '../public/assets/spaceDoodles/coder.png'

export default function About() {
	const cols = useThemeColors()

	return (
		<>
			<Box>
				<Box
					backgroundColor={useColorModeValue('black', '')}
					h={'6rem'}
					left='5rem'
					top='0rem'
					right='0'
					position={'absolute'}
				/>
				<Box
					h={{ base: '7rem', lg: '10rem' }}
					w={{ base: '7rem', lg: '10rem' }}
					right={{ base: '0rem', lg: '4rem' }}
					top='8rem'
					position={'fixed'}
				>
					<Image src={coder} alt='astronaut' />
				</Box>

				<Box
					maxWidth={'90%'}
					maxHeight={'90%'}
					paddingTop={'4rem'}
					paddingBottom={'4rem'}
					paddingRight={{ base: '3rem', lg: '1rem' }}
					paddingLeft={{ base: '2rem', lg: '1rem' }}
				>
					<Heading>Kia Ora Taiao</Heading>
					<br></br>

					<Heading size={'m'} as={'i'}>
						_H e l l o_W o r l d_
					</Heading>
					<VStack>
						<br></br>
						<br></br>
						<Text
							size={{ base: 'sm', lg: 'sm' }}
							lineHeight={'200%'}
							fontWeight={'500'}
						>
							I am Hannah Bee from Wellington New Zealand. <br></br> <br></br>I began
							my journey as a dev in April of 2022 after dabbling in illustration,
							writing, photography and graphic design for years.<br></br>I graduated
							from Dev Academy bootcamp in July 2022 and since then have been
							continuing to explore what I enjoy most about coding. <br></br>
							<br></br>In my spare time I make props, do performance and paint.{' '}
							<br></br>I also design video game characters...so, watch this space!
							<br></br>
							<br></br>I like to approach everything I do with a playful, curious
							attitude that retains the wonder of noticing. <br></br>This means that I
							tend to be pretty good at problem solving and identifying solutions that
							fall outside of the hypothetical box.
							<br></br>
							<br></br> During various freelance jobs I have become aware that a big
							aspect of good branding has a lot to do with how you make people feel.{' '}
							<br></br>I like to make people feel seen and heard and collaborate in an
							open and holistic way that empowers others to see their vision come to
							life.
							<br></br>
							<br></br> I also have a cat. <br></br> His name is mr. Big Stretch.{' '}
							<br></br>He is the worst. <br></br>
							<br></br>
						</Text>
					</VStack>
					<Heading as={'i'} size={'md'}>
						H Bee
					</Heading>
				</Box>
			</Box>
		</>
	)
}
