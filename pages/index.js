import { Box, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import Scene from '../components/landing/Scene'
import Scroll from '../components/landing/Scroll'
import Space from '../components/landing/Space'

import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<Box className={styles.container}>
			<Head>
				<title>HannahBee</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Space />
			<Scroll />

			<Scene />
		</Box>
	)
}
