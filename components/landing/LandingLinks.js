import { Box, Link, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import me from '../../public/assets/me.jpg'
import Appear from './Appear'
import Leo from './Leo'

export default function LandingLinks() {
	// const blurbWidth = '18rem'
	const blurbWidth = { base: '15rem', md: '20rem', lg: '24rem' }

	const commonBoxProps = {
		width: blurbWidth,
		padding: '1.5rem',
		display: 'flex',
		flexDir: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		borderRadius: '5px',
		className: 'blur glow',
	}

	return (
		<Box maxW='4xl' alignSelf='center'>
			<VStack justifyContent={'center'} alignItems={'center'} marginTop={10} marginBottom={3}>
				<Box h={'10rem'} />

				<Box {...commonBoxProps} alignSelf='flex-end'>
					<Text fontSize={'2xl'}>My name is Hannah.</Text>
				</Box>

				<Box h={'5rem'} />

				<Box h={'5rem'} />
				<Box alignSelf='flex-start' {...commonBoxProps}>
					<Text fontSize={'2xl'} w='12rem' color='gray.100'>
						Pleased to meet you!
					</Text>
				</Box>
				<Box
					alignSelf='flex-start'
					display='flex'
					flexDir='column'
					justifyContent={'center'}
					alignItems={'center'}
					transform='rotate(-10deg)'
					w='30rem'
				>
					<Appear>
						<Image alt='a set of four images of my face' src={me} />
					</Appear>
				</Box>
				<Box h={'5rem'} />
				<Box alignSelf='flex-end' {...commonBoxProps}>
					<Text fontSize={'2xl'} w='12rem' color='gray.100'>
						I am an artist, insect enthusiast, brand designer and web developer.
					</Text>
				</Box>

				<Box h={'37rem'} />
				<Text fontSize={'2xl'} zIndex='5'>
					This is my cat,
					<br />
					Mr. Big Stretch
				</Text>
				<Leo />
				<Box h={'12rem'} />

				<Box {...commonBoxProps}>
					<Text zIndex='8' fontSize={'2xl'}>
						See what all the
					</Text>
					<Text zIndex='8' fontSize={'2xl'}>
						fuss is about
					</Text>
				</Box>
				<Box h={'2rem'} />
				<Box
					zIndex='5'
					padding={'1.5rem'}
					display='flex'
					flexDir='column'
					justifyContent={'center'}
					alignItems={'center'}
					className='glow'
					backgroundColor={' white'}
					color={' black'}
					borderRadius={'5px'}
					as={Link}
					href='/portfolio'
					_hover={{ textDecoration: 'none' }}
				>
					<Text fontSize={'2xl'}>ok.</Text>
				</Box>

				<Box h={'15rem'} />
			</VStack>
		</Box>
	)
}
