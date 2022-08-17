import {
	Box,
	Button,
	Divider,
	Hide,
	HStack,
	IconButton,
	Link,
	LinkOverlay,
	Spacer,
	Text,
	useColorMode,
	VStack,
} from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import { useThemeColors } from '../constants'
import on from '../../public/assets/spaceDoodles/on2.png'
import off from '../../public/assets/spaceDoodles/off2.png'
import Image from 'next/image'
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Burger from './Burger'

export default function Header() {
	const { colorMode, toggleColorMode } = useColorMode()
	const cols = useThemeColors()
	return (
		<HStack
			as='nav'
			alignItems='center'
			paddingRight='4'
			backgroundColor={cols.head}
			zIndex='2'
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

			<Hide below='md'>
				<VStack paddingLeft={'1rem'} color={cols.white}>
					<Divider variant={'solid'} orientation='horizontal' />
					<Text>FULLSTACK</Text>
					<Divider variant={'solid'} orientation='horizontal' />
					<Text>DEVELOPER</Text>
					<Divider variant={'solid'} orientation='horizontal' />
				</VStack>
			</Hide>

			<Spacer />

			<HStack spacing={'2rem'} paddingRight={'1.5rem'}>
				<Hide below='md'>
					<NextLink href='/portfolio' passHref>
						<Link _hover={{ textDecoration: null }}>
							<Text color={'white'}>Portfolio</Text>
						</Link>
					</NextLink>
				</Hide>
				<Hide below='md'>
					<NextLink href='/monsters' passHref>
						<Link _hover={{ textDecoration: null }}>
							<Text color={cols.white}>Character Design</Text>
						</Link>
					</NextLink>
				</Hide>

				<Hide below='md'>
					<NextLink href='/contact' passHref>
						<Link _hover={{ textDecoration: null }}>
							<Text color={cols.white}>Contact</Text>
						</Link>
					</NextLink>
				</Hide>
				<Hide below='md'>
					<Menu>
						{({ isOpen }) => (
							<>
								<MenuButton color={cols.white} isactive={isOpen} as={Text}>
									{isOpen ? 'ect.' : 'ect.'}
								</MenuButton>
								<MenuList>
									<Link href='/about'>
										<MenuItem>About me</MenuItem>
									</Link>
									<Link href='/life'>
										<MenuItem>Conway's Game of life</MenuItem>
									</Link>
								</MenuList>
							</>
						)}
					</Menu>
				</Hide>
			</HStack>

			<IconButton
				isRound
				padding={2.5}
				backgroundColor={cols.black}
				_hover={{ backgroundColor: cols.lghthover }}
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
			<Burger />
		</HStack>
	)
}
