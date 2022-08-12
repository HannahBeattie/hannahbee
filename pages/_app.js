import '../styles/globals.css'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import Header from '../components/Header'

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
}
const theme = extendTheme({ config })

export default function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<Header />
			<Component {...pageProps} />
		</ChakraProvider>
	)
}
