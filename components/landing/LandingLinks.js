import { Box, Center, HStack, Link, Text, Tooltip, VStack } from '@chakra-ui/react'
import { useThemeColors } from '../constants'
import Appear from './Appear'
import Leo from './Leo'

export default function LandingLinks() {
	const blurbWidth = { base: '15rem', md: '20rem', lg: '24rem' }
	const cols = useThemeColors()

	const commonBoxProps = {
		width: blurbWidth,
		padding: '2rem',
		display: 'flex',
		flexDir: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: cols.blurbbk,
		color: cols.blurbfont,
		borderRadius: '3px',
		className: 'blur glow',
	}

	return (
		<Box maxW='4xl' alignSelf='center'>
			<VStack justifyContent={'center'} alignItems={'center'} marginTop={10} marginBottom={3}>
				<Box h={'10rem'} />
				<Tooltip label="(that's a palindrome)" bg={cols.black} color={cols.white}>
					<Box {...commonBoxProps} alignSelf='flex-end'>
						<Text fontSize={'2xl'}>My name is Hannah.</Text>
					</Box>
				</Tooltip>

				<Box h={'5rem'} />

				<Box h={'5rem'} />
				<Box alignSelf='flex-start' {...commonBoxProps}>
					<Text fontSize={'2xl'} w='12rem'>
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
					w={{ base: '20rem', md: '30rem' }}
				>
					<Appear />
				</Box>
				<Box h={'5rem'} />
				<Box alignSelf='flex-end' {...commonBoxProps}>
					<Text fontSize={'2xl'} w='12rem'>
						I am an artist, insect enthusiast, designer and dev...
					</Text>
				</Box>

				<Box h={'37rem'} />
				<Text fontSize={'2xl'} zIndex='5' textColor={cols.white}>
					This is my cat,
					<br />
					Mr. Big Stretch
				</Text>
				<Leo />

				<Text fontSize={'2xl'} zIndex='5' textColor={cols.white}>
					He is the worst.
				</Text>

				<Box h={'15rem'} />

				<Box {...commonBoxProps}>
					<Text zIndex='8' fontSize={'2xl'}>
						Want to see my work?
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
				<Box h={'2rem'} />
				<Box
					zIndex='5'
					padding={'2rem'}
					display='flex'
					flexDir='column'
					justifyContent={'center'}
					alignItems={'center'}
					textAlign={'center'}
					className='glow'
					backgroundColor={' white'}
					color={' black'}
					borderRadius={'6px'}
					as={Link}
					href='/about'
					_hover={{ textDecoration: 'none' }}
				>
					<Text fontSize={'2xl'}>
						not just yet...
						<br></br>I want to know more about you.
					</Text>
				</Box>

				<Box h={'15rem'} />
			</VStack>
		</Box>
	)
}
