import {
	Box,
	Divider,
	HStack,
	IconButton,
	Link,
	Spacer,
	Text,
	useColorMode,
	VStack,
} from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import { useThemeColors } from './constants'
import on from '../public/assets/spaceDoodles/on2.png'
import off from '../public/assets/spaceDoodles/off2.png'
import Image from 'next/image'

export default function Header() {
	const { colorMode, toggleColorMode } = useColorMode()
	const cols = useThemeColors()
	return (
		<HStack
			as='nav'
			alignItems='center'
			paddingRight='4'
			backgroundColor={cols.ReadingContrast}
		>
			<NextLink href='/' passHref>
				<Link _hover={{ textDecoration: null }}>
					<Box
						backgroundColor={cols.black}
						padding={'1.5rem'}
						color={cols.ReadingContrast}
					>
						<Text color={cols.white}>H A N </Text>
						<Text color={cols.white}>N A H</Text>
					</Box>
				</Link>
			</NextLink>
			<NextLink href='/portfolio' passHref>
				<Link _hover={{ textDecoration: null }}>
					<VStack paddingLeft={'1rem'}>
						<Divider variant={'solid'} orientation='horizontal' />
						<Text>FULLSTACK</Text>
						<Divider variant={'solid'} orientation='horizontal' />
						<Text>DEVELOPER</Text>
						<Divider variant={'solid'} orientation='horizontal' />
					</VStack>
				</Link>
			</NextLink>

			<Spacer />
			<IconButton
				isRound
				padding={2.5}
				backgroundColor={cols.black}
				_hover={cols.lghthover}
				_active={{ backgroundColor: 'yellow.600' }}
				size={'3xl'}
				w={'4rem'}
				h={'4rem'}
				aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} theme`}
				icon={
					colorMode === 'light' ? (
						<Image src={on} alt='handrawn image of a lightbulb' />
					) : (
						<Image src={off} alt='handrawn image of a lightbulb with rays' />
					)
				}
				onClick={() => {
					toggleColorMode()
				}}
			/>
		</HStack>
	)
}
