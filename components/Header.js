import { Box, HStack, IconButton, Link, Spacer, Text, useColorMode } from '@chakra-ui/react'
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
		<HStack as='nav' alignItems='center' backgroundColor={'cols.bk'} paddingRight='4'>
			<NextLink href='/' passHref>
				<Link _hover={{ textDecoration: null }}>
					<Box
						backgroundColor={cols.logo}
						padding={'1.5rem'}
						_hover={cols._hover}
						color={cols.logotext}
					>
						<Text>H A N </Text>
						<Text>N A H</Text>
					</Box>
				</Link>
			</NextLink>

			<Spacer />
			<IconButton
				isRound
				padding={2.5}
				backgroundColor={'black'}
				_hover={cols.bk}
				size={'3xl'}
				w={'4rem'}
				h={'4rem'}
				aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} theme`}
				icon={
					colorMode === 'light' ? (
						<Image src={on} alt='handrawn lightbulb' />
					) : (
						<Image src={off} alt='handrawn lightbulb with rays' />
					)
				}
				onClick={() => {
					toggleColorMode()
				}}
			/>
		</HStack>
	)
}
