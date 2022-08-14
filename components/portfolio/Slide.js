import {
	Box,
	Text,
	VStack,
	Spacer,
	Link,
	useColorModeValue,
	textDecoration,
	Button,
	Container,
} from '@chakra-ui/react'

import Image from 'next/image'
import NextLink from 'next/link'

import { useThemeColors } from '../constants'

export default function Slide({ img, imgAlt, title, linkText, details, linkUrl }) {
	const cols = useThemeColors()
	return (
		<VStack p={'2rem'} alignItems='flex-start' backgroundColor={cols.ReadingContrast}>
			<Image src={img} alt={imgAlt} />

			<Text fontSize={'xl'} fontWeight={700}>
				{title}
			</Text>
			<Box>{details}</Box>
			<Spacer />
			{linkText && (
				<NextLink href={linkUrl} passHref _hover={{ textDecoration: 'none' }}>
					<Button
						as={Link}
						padding={3}
						isExternal
						borderRadius={'20px'}
						fontSize={'small'}
						fontWeight={'500'}
						color={cols.white}
						backgroundColor={cols.buttonbk}
						_hover={{ textDecoration: 'none' }}
					>
						{linkText}
					</Button>
				</NextLink>
			)}
		</VStack>
	)
}
