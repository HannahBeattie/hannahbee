import { useColorModeValue } from '@chakra-ui/react'

export function useThemeColors() {
	return {
		black: 'black',
		white: 'white',
		darkhover: { color: 'cyan.600' },
		lghthover: 'purple.900',
		lghthover2: useColorModeValue('purple.600', 'gray.500'),
		chiaroscuro: useColorModeValue('black', 'white'),
		ReadingContrast: useColorModeValue('gray.300', 'gray.900'),
		buttonbk: useColorModeValue('black', 'cyan.900'),
		button: 'gray.900',
		head: useColorModeValue('', 'blackAlpha.800'),
		on: 'yellow.700',
		on2: useColorModeValue('green.600', 'yellow.700'),
		bkdrop: useColorModeValue('black', ''),
		blurbbk: useColorModeValue('RGBA(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.6)'),
		blurbbk2: useColorModeValue('RGBA(255, 255, 255, 0.3)', 'rgba(0, 0, 0, 0.6)'),
		blurbrv: useColorModeValue('white', 'black'),
	}
}
