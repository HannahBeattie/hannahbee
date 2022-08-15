import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function about() {
	return (
		<Container paddingY={'4rem'}>
			<Heading paddingY={'1rem'}>Kia Ora Taiao</Heading>
			<br></br>
			<Heading as={'i'} size={'md'} paddingY={'1rem'}>
				Hello world
			</Heading>
			<br></br>
			<br></br>
			<Text size={'md'} lineHeight={'200%'}>
				I am Hannah Bee from Wellington New Zealand. <br></br> <br></br>I began my journey
				as a dev in April of 2022 after dabbling in illustration, writing, photography and
				graphic design for years.<br></br>I graduated from Dev Academy bootcamp in July 2022
				and since then have been continuing to explore what I enjoy most about coding.{' '}
				<br></br>
				<br></br>In my spare time I make props, do performance and paint. <br></br>
				<br></br>I like to approach everything I do with a playful, curious attitude that
				retains the wonder of noticing. <br></br>This means that I tend to be pretty good at
				problem solving and identifying solutions that fall outside of the hypothetical box.
				<br></br>
				<br></br> During various freelance jobs I have become aware that a big aspect of
				good branding has a lot to do with how you make people feel. <br></br>I like to make
				people feel seen and heard and collaborate in an open and holistic way that empowers
				others to see their vision come to life.<br></br>
				<br></br> I also have a cat. <br></br> His name is mr. Big Stretch. <br></br>He is
				the worst. <br></br>
				<br></br>
			</Text>
			<Heading as={'i'} size={'md'}>
				H Bee
			</Heading>
		</Container>
	)
}
