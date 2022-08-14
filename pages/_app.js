import '../styles/globals.css'
import { ChakraProvider, ColorModeScript, extendTheme, VStack } from '@chakra-ui/react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
}
const theme = extendTheme({ config })

export default function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<VStack alignItems='stretch' minH='100vh' spacing='0'>
				<Header />
				<VStack as='main' flex='1'>
					<Component {...pageProps} />
				</VStack>
				<Footer />
			</VStack>
		</ChakraProvider>
	)
}
