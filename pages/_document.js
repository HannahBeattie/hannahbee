import { Flex } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'

// Override default Next document to enforce overflowX=hidden on body element
// See: https://nextjs.org/docs/advanced-features/custom-document
export default function Document() {
	return (
		<Html>
			<Head />
			<Flex as='body' w='100vw' overflowX='hidden' flexDir='column'>
				<Main />
				<NextScript />
			</Flex>
		</Html>
	)
}
