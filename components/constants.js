import { useColorModeValue } from '@chakra-ui/react'

export function useThemeColors() {
	return {
		black: 'black',
		white: 'white',
		darkhover: { color: 'cyan.600' },
		lghthover: 'purple.900',
		chiaroscuro: useColorModeValue('black', 'white'),
		ReadingContrast: useColorModeValue('gray.300', 'gray.900'),
		buttonbk: useColorModeValue('black', 'cyan.900'),
		button: 'gray.900',
		head: useColorModeValue('', 'blackAlpha.800'),
		on: 'yellow.700',
		bkdrop: useColorModeValue('black', ''),
		blurbbk: useColorModeValue('RGBA(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.6)'),
		blurbfont: useColorModeValue('black', 'white'),
		blurbrv: useColorModeValue('white', 'black'),
		cont: useColorModeValue('white', 'blackAlpha.500'),
		ReadingContrast2: useColorModeValue('blackAlpha.800', 'gray.200'),
		ReadingContrast3: useColorModeValue('', 'gray.500'),
	}
}
