import { useColorModeValue } from '@chakra-ui/react'

export function useThemeColors() {
	return {
		logo: 'black',
		logotext: 'white',
		bg: useColorModeValue('gray.300', 'gray.900'),
		_hover: { color: 'cyan.800' },
		bk: { backgroundColor: 'cyan.900' },
	}
}
