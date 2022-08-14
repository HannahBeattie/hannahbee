import { useColorModeValue } from '@chakra-ui/react'

export function useThemeColors() {
	return {
		black: 'black',
		white: 'white',
		darkhover: { color: 'cyan.600' },
		lghthover: { backgroundColor: 'purple.900' },
		chiaroscuro: useColorModeValue('black', 'white'),
		ReadingContrast: useColorModeValue('gray.200', 'blackAlpha.800'),
		buttonbk: useColorModeValue('black', 'cyan.900'),
		softGray: '#1A202C',
	}
}
